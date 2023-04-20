import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatHeader = () => {
  return (
    <View style={styles.ChatHeaderContainer}>
      <Image source={require('../../assets/back.png')}></Image>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 22,
            fontWeight: '600' as FontWeight,
            marginRight: 5,
          }}>
          jacob_w
        </Text>
        <Image source={require('../../assets/down.png')}></Image>
      </View>

      <Image source={require('../../assets/plus.png')}></Image>
    </View>
  );
};

export default ChatHeader;
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
const styles = StyleSheet.create({
  ChatHeaderContainer: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
