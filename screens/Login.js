import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import DeviceInfo from 'react-native-device-info';

const LoginScreen = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    async function fetchDeviceInfo() {
      const id = await DeviceInfo.getUniqueId();
      setDeviceId(id);
    }

    fetchDeviceInfo();
  }, []);

  const handlePinChange = async (value, index) => {  
    if(pin.length<4){
        const newPin = pin.slice(0, index) + value + pin.slice(index + 1);
        setPin(newPin);
        try {
          const response = await fetch('localhost/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Login successful, handle further actions here
            console.log('Login successful:', data);
          } else {
            // Login failed, display error message
            console.error('Login failed:', data.error);
            Alert.alert('Login failed', 'Invalid username or password');
          }
        } catch (error) {
          console.error('Error occurred during login:', error);
          Alert.alert('Error', 'An error occurred while trying to login. Please try again later.');
        }
      }
      
  };


  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleLogin = () => {
    // Handle login logic here
    if(pin.length==4){
      console.log('Logging in with pin:', pin,' and device id:', deviceId);
    } else{
      console.log('incomplete password:');
    }
  };

  const handleClear = () => {
    setPin('');
  };

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