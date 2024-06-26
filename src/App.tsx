/**
 * Example Application that embeds the Tyro React Native SDK
 */

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { TyroProvider } from '@tyro/tyro-pay-api-react-native';
import CheckoutPage from 'CheckoutPage';

function App(): JSX.Element {
  const [generatedPaySecret, setPaySecret] = useState('');

  // fetch the pay secret from your server
  const generatePaySecret = async () => {
    // this generates a sandbox only pay request for your testing purposes
    const response = await fetch('https://api.tyro.com/connect/pay/demo/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const { paySecret } = await response.json();
    console.log('obtained paySecret', paySecret);
    setPaySecret(paySecret);
  };

  useEffect(() => {
    if (!generatedPaySecret) {
      generatePaySecret();
    }
  }, [generatedPaySecret]);

  const resetDemo = () => {
    setPaySecret('');
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Button title={'Restart The Demo'} onPress={resetDemo} />
          <View>
            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Demo Merchant Checkout</Text>
            </View>
            {/* Content */}
            <View style={styles.contentContainer}>
              {generatedPaySecret ? (
                <TyroProvider
                  options={{
                    liveMode: false,
                    options: {
                      googlePay: {
                        enabled: true,
                        merchantName: 'Example Merchant',
                      },
                      applePay: {
                        enabled: true,
                        merchantIdentifier: 'merchant.tyro-pay-api-sample-app',
                      },
                    },
                  }}
                >
                  <CheckoutPage paySecret={generatedPaySecret} resetPaySecret={resetDemo} />
                </TyroProvider>
              ) : (
                <ActivityIndicator />
              )}
            </View>
            {/* Footer */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Tyro Pay API React Native SDK</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
