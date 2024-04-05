//bkup
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Members from './screens/Members';
import Accountdetails from './screens/Accountdetails';
import Biodata from './screens/Biodata';
import DepositD from './screens/DepositD';
import DepositS from './screens/DepositS';
import LoginScreen from './screens/Login';
import NotificB from './screens/Notifications';
import NotificD from './screens/Notificationdetails';
import Pinchange from './screens/Pinchange';
import Statement from './screens/Statements';
import Shares from './screens/Myshares';
import GroupChat from './screens/chats';

// Define DrawerNavigator
const Drawer = createDrawerNavigator();

// Define StackNavigator for existing screens
const Stack = createStackNavigator();

// Create a component for the DrawerNavigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Members" component={Members} />
      <Drawer.Screen name="Accountdetails" component={Accountdetails} />
      <Drawer.Screen name="Biodata" component={Biodata} />
      <Drawer.Screen name="Deposit" component={DepositD} />
      <Drawer.Screen name="DepositShares" component={DepositS} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="Notifics" component={NotificB} />
      <Drawer.Screen name="Notificd" component={NotificD} />
      <Drawer.Screen name="Pinchange" component={Pinchange} />
      <Drawer.Screen name="Statement" component={Statement} />
      <Drawer.Screen name="Shares" component={Shares} />
      <Drawer.Screen name="Chats" component={GroupChat} />
    </Drawer.Navigator>
  );
};

// Create a component for the StackNavigator
const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;



/*import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

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
import GroupChat from './screens/chats.js';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: 'maroon',
          width: 240,
          Fontcolor:'white',
          drawerActiveTintColor:"#fff",
          drawerActiveBackgroundColor:"#fff",
        },}}>
        <Drawer.Screen name="Home" component={HomeScreen} 
          options={{
            title:"Dashboard",}}
          />
        <Drawer.Screen name="BioData" component={Biodata} />
        <Drawer.Screen name="ChangePin" component={Pinchange} />
        <Drawer.Screen name="Logout" component={LoginScreen} />
        <Drawer.Screen name="Members" component={Members} />
        <Drawer.Screen name="Accountdetails" component={Accountdetails} />
        <Drawer.Screen name='Deposit' component={DepositD} />
        <Drawer.Screen name='DepositShares' component={DepositS} />
        <Drawer.Screen name='Notifics' component={NotificB} />
        <Drawer.Screen name='Notificd' component={NotificD} />
        <Drawer.Screen name='Statement' component={Statement} />
        <Drawer.Screen name='Shares' component={Shares} />
        <Drawer.Screen name='Chats' component={GroupChat} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginRight: 15,
  },
});

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';


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
import GroupChat from './screens/chats.js';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const RightSideMenu = ({ navigation }) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="group" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            headerRight: () => <RightSideMenu navigation={navigation} />,
          })}/>  
          
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Accountdetails" component={Accountdetails} />
        <Stack.Screen name='Biodata' component={Biodata}/>
        <Stack.Screen name='Deposit' component={DepositD} />
        <Stack.Screen name='DepositShares' component={DepositS} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='Notifics' component={NotificB} />
        <Stack.Screen name='Notificd' component={NotificD} />
        <Stack.Screen name='Pinchange' component={Pinchange} />
        <Stack.Screen name='Statement' component={Statement} />
        <Stack.Screen name='Shares' component={Shares} />
        <Stack.Screen name='Chats' component={GroupChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}; 

const styles = StyleSheet.create({
  menuContainer: {
    marginRight: 10,
  },
});*/

// App.js

// App.js
