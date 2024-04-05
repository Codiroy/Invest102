// CustomDrawerContent.js

import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Bio Data"
        onPress={() => {
          // Navigate to Bio Data screen
          props.navigation.navigate('BioData');
        }}
      />
      <DrawerItem
        label="Change Pin"
        onPress={() => {
          // Navigate to Change Pin screen
          props.navigation.navigate('Pinchange');
        }}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
