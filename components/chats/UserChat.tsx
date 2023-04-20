import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const UserChat = () => {
  return (
    <View>
      <View style={styles.Userchat}>
        <View style={styles.chatContainer}>
          <View style={styles.chatLeft}>
            <View style={styles.chatProfile}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',

                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}></Image>
            </View>
            <View style={styles.ChatNname}>
              <Text style={{color: '#000'}}>joshua_I</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'rgba(0, 0, 0, 0.4)'}}>
                  Have a nice day, bro!
                </Text>
                <Text style={styles.time}>now</Text>
              </View>
            </View>
          </View>

          <View style={styles.chatRight}>
            <Image source={require('../../assets/camera.png')}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserChat;
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
  Userchat: {},

  chatContainer: {
    height: 72,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // width:
  },
  chatRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 15,
  },
  chatBox: {width: 62, height: 81, marginRight: 20},
  chatProfile: {
    width: 62,
    height: 62,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
    marginRight: 8,
  },
  ChatNname: {
    position: 'relative',
    width: '72%',
  },
  time: {
    position: 'absolute',
    right: 0,
    fontWeight: '400' as FontWeight,
    fontSize: 13,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  chatProfileName: {},
});
