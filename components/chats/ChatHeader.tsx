import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontWeight} from '../../typeDefines';
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

      <Image
        style={{width: 22, height: 22}}
        source={require('../../assets/plus.png')}></Image>
    </View>
  );
};

export default ChatHeader;

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
