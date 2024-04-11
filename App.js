import 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { useState,useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContent';
import HomeScreen from './screens/HomeScreen';
import Members from './screens/Members';
import Accountdetails from './screens/Accountdetails';
import Biodata from "./screens/Biodata";
import DepositD from './screens/DepositD';
import DepositS from './screens/DepositS';
import LoginScreen from './screens/Login';
import Activate from './screens/Activate';
import Shares from './screens/Myshares';
import NotificB from './screens/Notifications';
import NotificD from './screens/Notificationdetails';
import Pinchange from './screens/Pinchange';
import Statement from './screens/Statements';
import GroupChat from './screens/chats.js';

const StackNav = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#800000',
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#fff"
              />
            );
          },
        }}
      />
        <Stack.Screen name='LoginScreen' component={Loginnav} />
        <Stack.Screen name="Biodata" component={Biodata} options={{headerShown: true,}}/>
        <Stack.Screen name='Members' component={Members} />
        <Stack.Screen name='Accountdetails' component={Accountdetails} />
        <Stack.Screen name='Deposit' component={DepositD} />
        <Stack.Screen name='DepositShares' component={DepositS} />
        <Stack.Screen name='Notifics' component={NotificB} />
        <Stack.Screen name='Notificd' component={NotificD} />
        <Stack.Screen name='Pinchange' component={Pinchange} />
        <Stack.Screen name='Statement' component={Statement} />
        <Stack.Screen name='Shares' component={Shares} />
        <Stack.Screen name='Chats' component={GroupChat} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const Loginnav = () => {
  
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        statusBarColor: '#800000',
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} /> 
        <Stack.Screen name='Home' component={DrawerNav} />
        <Stack.Screen name='Activate' component={Activate} />
    </Stack.Navigator>
  );
};

function App() {
  const [isLoggedin,setisLoggedin]=useState(false);
  
  async function getdata(){
    const data=await AsyncStorage.getItem('userData');    
    setisLoggedin(data);
  }

  useEffect(()=>{
    getdata();
  },[])

   return (
    <NavigationContainer>
      {isLoggedin?(<DrawerNav />):(<Loginnav />)}   
    </NavigationContainer>
  );
}
export default App;
