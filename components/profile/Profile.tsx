import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatHeader from '../chats/ChatHeader';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import FooterNavigation from '../FooterNavigation';

const Profile = () => {
  return (
    <View style={{height: '100%'}}>
      <View>
        <ProfileHeader />
      </View>
      <ScrollView style={{marginBottom: 60}}>
        <ProfileBio />
      </ScrollView>
      <FooterNavigation />
    </View>
  );
};

export default Profile;
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
const styles = StyleSheet.create({});
