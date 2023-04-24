import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontWeight} from '../../typeDefines';
const ProfileHeader = () => {
  return (
    <View style={styles.ChatHeaderContainer}>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        style={{
          flexDirection: 'row',
          position: 'absolute',
          right: 20,
          width: 24,
          height: 24,
        }}
        source={require('../../assets/Menu.png')}></Image>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  ChatHeaderContainer: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
