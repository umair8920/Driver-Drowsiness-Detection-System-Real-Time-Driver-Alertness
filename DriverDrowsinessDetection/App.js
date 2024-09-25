import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './HomeScreen';

import Drowsiness from './Drowsiness';
import Emotions from './Emotions';
import Dehazing from './Dehazing';
import SidebarNavigator from './SidebarNavigator';
import Authentication from './Authentication';
import AboutScreen from './AboutScreen';




import RecordScreen from './RecordScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen name="SidebarNavigator" component={SidebarNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Emotions" component={Emotions} options={{ headerShown: false }} />
        <Stack.Screen name="Dehazing" component={Dehazing} options={{ headerShown: false }} />
        <Stack.Screen name="Drowsiness" component={Drowsiness} options={{ headerShown: false }} />

        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
      
        <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
   

      </Stack.Navigator>
    </NavigationContainer>
  );
}
