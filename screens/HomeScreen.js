import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const images = [
    require('../images/james.png'),
    require('../images/john.png'),
    require('../images/peter.png'),
  ];

  const DrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Change Pin"
        onPress={() => console.log('Change Pin pressed')}
      />
      <DrawerItem
        label="Logout"
        onPress={() => console.log('Logout pressed')}
      />
    </DrawerContentScrollView>
  );

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home">
        {() => (
          <View style={{ flex: 1 }}>
          <View style={{ flex: 0.25, backgroundColor: 'maroon', opacity: 0.5 }} />
    
          <View style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center' }}>
           <ImageSlider images={images} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightblue',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page1')}
              >
                <Icon name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightgreen',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5, 
                }}
                onPress={() => handleNavigation('Page2')}
              >
                <Icon name="work" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
    
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'lightgray' }}>
            <TouchableOpacity
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}
              onPress={() => console.log('Home pressed')}
            >
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}
              onPress={() => console.log('FAQs pressed')}
            >
              <Text>FAQs</Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Bio Data" component={BioDataScreen} />
      <Drawer.Screen name="Next of Kin" component={NextOfKinScreen} />
      <Drawer.Screen name="App Info" component={AppInfoScreen} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
