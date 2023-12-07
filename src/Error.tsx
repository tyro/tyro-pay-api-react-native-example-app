import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ErrorHandlerProps {
  errorCode?: string;
  errorMessage?: string;
}

const ErrorHandler = ({ errorCode, errorMessage }: ErrorHandlerProps): JSX.Element => {
  return (
    <>
      {(errorCode || errorMessage) && (
        <View style={styles.errorContainer}>
          <Text id="error-handler" style={styles.errorText}>
            {errorCode && <Text style={styles.errorCodeText}>{errorCode}:&nbsp;</Text>}
          </Text>
          <Text style={styles.errorCodeText}>{errorMessage}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ee4444',
    marginTop: 10,
    marginBottom: 20,
  },
  errorCodeText: {
    fontSize: 14,
    color: '#fefefe',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 14,
    color: '#fefefe',
  },
});

export default ErrorHandler;
