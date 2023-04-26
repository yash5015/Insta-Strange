import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotificatonHeader from './NotificatonHeader';
import {ScrollView} from 'react-native-gesture-handler';
import Notifies from './Notifies';
import FooterNavigation from '../FooterNavigation';

const Notification = () => {
  return (
    <View style={{flex: 1}}>
      <NotificatonHeader />
      <ScrollView>
        <Notifies />
      </ScrollView>
      {/* <FooterNavigation /> */}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
