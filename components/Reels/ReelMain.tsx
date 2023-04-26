import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FooterNavigation from '../FooterNavigation';
import {ScrollView} from 'react-native-gesture-handler';
import PostSwipers from '../posts/PostSwipers';
import SearchBox from '../SearchBox';

const ReelMain = () => {
  return (
    <View style={{flex: 1}}>
      <SearchBox />
      <ScrollView>
        <Text>Reels</Text>
        <Text>Reels</Text>
        <Text>Reels</Text>
        <Text>Reels</Text>
      </ScrollView>
      {/* <FooterNavigation /> */}
    </View>
  );
};

export default ReelMain;

const styles = StyleSheet.create({});
