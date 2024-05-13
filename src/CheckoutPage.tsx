/**
 * Example Checkout that uses the Tyro React Native SDK Pay Sheet
 */

import { useTyro, PaySheet } from '@tyro/tyro-pay-api-react-native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import ErrorHandler from 'Error';
import PayButton from 'PayButton';

interface CheckoutPageProps {
  paySecret: string;
  resetPaySecret: () => void;
}

const CheckoutPage = ({ paySecret, resetPaySecret }: CheckoutPageProps): JSX.Element => {
  const {
    initPaySheet,
    initialised,
    payRequest,
    isPayRequestReady,
    isPayRequestLoading,
    tyroError,
    isSubmitting,
    submitPayForm,
  } = useTyro();

  useEffect(() => {
    if (initialised === true && paySecret) {
      initPaySheet(paySecret);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialised, paySecret]);

  if (!paySecret) {
    return <ErrorHandler errorMessage={'paySecret has not been generated'} />;
  }

  if (payRequest?.status === 'SUCCESS') {
    return (
      <>
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Your payment was successfully processed.</Text>
        </View>
        <Button title={'START AGAIN?'} onPress={resetPaySecret} />
      </>
    );
  }

  return (
    <>
      <ErrorHandler errorCode={tyroError?.errorCode ?? tyroError?.errorType} errorMessage={tyroError?.errorMessage} />
      {isPayRequestReady && <PaySheet />}
      {isPayRequestReady && <PayButton onSubmit={submitPayForm} loading={isSubmitting} title="Pay" />}
      {isPayRequestLoading && <ActivityIndicator />}
    </>
  );
};

const styles = StyleSheet.create({
  successContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fefefe',
    marginBottom: 20,
  },
  successText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '900',
    color: '#229922',
  },
});

export default CheckoutPage;
