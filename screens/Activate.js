import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
    const [nationalId, setNationalId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');

  const handlePinChange = (value, index) => {  
    if(pin.length<4){
        const newPin = pin.slice(0, index) + value + pin.slice(index + 1);
        setPin(newPin);
        setDeviceId('0720037976');
      }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleActivation = async () => {
    if(pin.length==4){
      setLoading(true);
      console.log('Logging in with pin:', pin,' and device id:', deviceId);

      try {
        //http://10.0.2.2:4000/login
        const response = await fetch('http://192.168.0.109:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
        const responseData = await response.json();
        if (response.ok) {
          AsyncStorage.setItem('isLoggedin',JSON.stringify(true));
          AsyncStorage.setItem('userData',responseData );
          Alert.alert('Login successfull', 'Login successfull');
          navigation.navigate('Home');
        } else {
          Alert.alert('Login failed', 'wrong pin, please try again');
        }
        console.log('data',responseData);      
    }catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Login failed', 'Server cannot be reached');
    }setLoading(false); }
      else{
      console.log('incomplete password:');
     // Alert.alert('Login Failed', 'Wrong pin.');
    }
  };

  const handleClear = () => {
    setPin('');
  };


  return (
    <LinearGradient
        colors={['#800000', '#ffffff']}
        style={styles.gradient}
  > 
  <View style={{width: '100%',height:300,alignItems: 'center',justifyContent: 'center',}}>
  <Image
        source={require('../assets/T_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    <Text style={styles.heading}>Account Activation</Text>
  </View>
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="National ID"
        value={nationalId}
        onChangeText={setNationalId}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Member Number"
        value={memberNumber}
        onChangeText={setMemberNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm PIN"
        value={confirmPin}
        onChangeText={setConfirmPin}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleActivation}>
        <Text style={styles.loginButtonText}>Activate Account</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  loginIconContainer: {
    marginBottom: 20,
  },
  pinInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 24,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#800000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin:10,
    padding:5,
  },
  input:{
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
    fontSize: 20,
  },
 loginButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 30,
      },
  heading:{
    color: 'white',
    fontSize: 24,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LoginScreen;