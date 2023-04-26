import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './components/RootNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <RootNavigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
