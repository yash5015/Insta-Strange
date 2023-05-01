import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Mypost from './MyPosts/Mypost';

import Taggedpost from './MyPosts/Taggedpost';
const Tab = createMaterialTopTabNavigator();
const {height, width} = Dimensions.get('window');

const ProfilePostsSection = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Mypost"
        component={Mypost}
        options={{
          tabBarIcon: ({focused, tintcolor}) => (
            <Image source={require('../../assets/GridIcon.png')}></Image>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Taggedpost"
        component={Taggedpost}
        options={{
          tabBarIcon: ({focused, tintcolor}) => (
            // <Icon type="material-community" name="grid" size={20} />
            <Image source={require('../../assets/TagIcon.png')}></Image>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfilePostsSection;

const styles = StyleSheet.create({});
