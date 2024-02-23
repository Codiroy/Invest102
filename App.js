import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Members from './screens/Members';
import Accountdetails from './screens/Accountdetails';
import Biodata from "./screens/Biodata";
import DepositD from './screens/DepositD';
import DepositS from './screens/DepositS';
import LoginScreen from './screens/Login';
import Shares from './screens/Myshares';
import NotificB from './screens/Notifications';
import NotificD from './screens/Notificationdetails';
import Pinchange from './screens/Pinchange';
import Statement from './screens/Statements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Accountdetails" component={Accountdetails} />
        <Stack.Screen name='Biodata' component={Biodata} options={{ headerShown: false }}/>
        <Stack.Screen name='Deposit' component={DepositD} />
        <Stack.Screen name='DepositShares' component={DepositS} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='Notifics' component={NotificB} />
        <Stack.Screen name='Notificd' component={NotificD} />
        <Stack.Screen name='Pinchange' component={Pinchange} />
        <Stack.Screen name='Statement' component={Statement} />
        <Stack.Screen name='Shares' component={Shares} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}