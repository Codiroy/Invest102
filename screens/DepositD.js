import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const DepositScreen = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDeposit = () => {
    // Assuming you have a function to call Mpesa API to initiate the deposit
    // Replace 'callMpesaAPI' with the actual function you use to call Mpesa API
    callMpesaAPI(amount, phoneNumber)
      .then((response) => {
        // Handle success response from Mpesa API
        Alert.alert('Success', 'Funds deposited successfully.');
      })
      .catch((error) => {
        // Handle error response from Mpesa API
        Alert.alert('Error', 'Failed to deposit funds. Please try again later.');
      }); 
  };

  return (
    <View>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button title="Deposit" onPress={handleDeposit} />
    </View>
  );
};

export default DepositScreen;
