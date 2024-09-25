import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import Drowsiness from './Drowsiness';
import Emotions from './Emotions';
import Dehazing from './Dehazing';
import RecordScreen from './RecordScreen';

const Drawer = createDrawerNavigator();


const SidebarNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drowsiness"
        component={Drowsiness}
        options={{
          drawerLabel: 'Drowsiness',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
          <Drawer.Screen
        name="Emotions"
        component={Emotions}
        options={{
          drawerLabel: 'Emotions',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
          <Drawer.Screen
        name="Dehazing"
        component={Dehazing}
        options={{
          drawerLabel: 'Dehazing',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="RecordScreen"
        component={RecordScreen}
        options={{
          drawerLabel: 'RecordScreen',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="photo-camera" color={color} size={size} />
          ),
        }}
      />

    <Drawer.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          drawerLabel: 'AboutScreen',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="photo-camera" color={color} size={size} />
          ),
        }}
      />


      

    </Drawer.Navigator>
    
  );
};

export default SidebarNavigator;

