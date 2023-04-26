import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatHeader from '../chats/ChatHeader';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import FooterNavigation from '../FooterNavigation';
import {FontWeight} from '../../typeDefines';
import {flingGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileHeader />
      <ProfileBio />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
