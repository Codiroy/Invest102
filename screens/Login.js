import React, { useState, useEffect} from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [Phone,setPhone]=useState('');
  const [loginData,setLoginData]=useState({PhoneNumber:'07089',pin});
  const [loading, setLoading] = useState(false);
  async function getActivation(){
    const data=await AsyncStorage.getItem('active');    
    setPhone('0707856745');
    if(Phone==''){
      console.log(Phone);
      navigation.navigate('Activate');
    }
  }

  useEffect(()=>{
    getActivation();
  },[])

  const handlePinChange = (value, index) => {  
    if(pin.length<4){
        const newPin = pin.slice(0, index) + value + pin.slice(index + 1);
        setPin(newPin);
        setPhone('0720037976');
      }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleLogin = async () => {
    if(pin.length==4){
      setLoginData({ PhoneNumber: Phone, Password: pin })
      setLoading(true);
      console.log('Logging in with pin:', pin,' and device id:', Phone);
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
          console.log('data',responseData.Surname);
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

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#800000"/>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LinearGradient
        colors={['#800000', '#ffffff']}
        style={styles.gradient}
  >
        <View style={styles.loginIconContainer}>
          <MaterialIcons name="login" size={60} color="white" />
        </View>
        <View style={styles.pinInputContainer}>
          {Array.from({ length: 4 }, (_, index) => (
            <TextInput
              key={index}
              style={styles.pinInput}
              value={pin[index] || ''}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handlePinChange(value, index)}
            />
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.row}>
            {[1, 2, 3].map((number) => (
              <TouchableOpacity key={number} style={styles.button} onPress={() => handlePinChange(number.toString(), pin.length)}>
                <Text style={styles.buttonText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {[4, 5, 6].map((number) => (
              <TouchableOpacity key={number} style={styles.button} onPress={() => handlePinChange(number.toString(), pin.length)}>
                <Text style={styles.buttonText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {[7, 8, 9].map((number) => (
              <TouchableOpacity key={number} style={styles.button} onPress={() => handlePinChange(number.toString(), pin.length)}>
                <Text style={styles.buttonText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handlePinChange('0', pin.length)}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
              <MaterialIcons name="backspace" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin:10,
    padding:5,
  },
  buttonText: {
    fontSize: 24,
  },
 loginButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 30,
      },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;