import React from 'react';
import { ActivityIndicator, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

type PayButtonProps = {
  onSubmit: () => Promise<void>;
  loading: boolean;
  title: string;
};

const PayButton = ({ onSubmit, loading, title }: PayButtonProps): JSX.Element => {
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity
          style={[styles.container, styles.button]}
          activeOpacity={0.3}
          onPress={onSubmit}
          accessibilityLabel="Submit the Pay Form"
          testID="pay-button"
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    borderRadius: 5,
    height: 40,
    width: '100%',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
});

export default PayButton;
