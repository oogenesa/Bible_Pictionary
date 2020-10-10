/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/mainTabScreen';
import {DrawerContent} from './screens/drawerContent';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer initalRouteName="Home">
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
