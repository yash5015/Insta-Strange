import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import UserChat from './UserChat';
SearchBox;
import ChatHeader from './ChatHeader';
import SearchBox from '../SearchBox';

const Chats = () => {
  return (
    <>
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
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({});
