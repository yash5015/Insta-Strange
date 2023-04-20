import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeMain from './components/HomeMain';
import Chats from './components/chats/Chats';
import Profile from './components/profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeMain" component={HomeMain} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Chats" component={Chats} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
