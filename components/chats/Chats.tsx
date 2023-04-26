import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import UserChat from './UserChat';
SearchBox;
import ChatHeader from './ChatHeader';
import SearchBox from '../SearchBox';

const Chats = () => {
  return (
    <View style={{flex: 1}}>
      <ChatHeader />

      <SearchBox />
      <ScrollView>
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
      </ScrollView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
