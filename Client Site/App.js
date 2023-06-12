/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppRoutingStack from './config/router/appRouting';
import TabNavigationApp from './config/router/tabNavigation';


const App = () => {

  return (
    <>
 <AppRoutingStack/>
  
    </>
  );
};


export default App;
