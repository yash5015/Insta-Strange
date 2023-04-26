import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontWeight} from '../../../typeDefines';
import {Image} from 'react-native';
const NotComment = () => {
  return (
    <View>
      <View style={styles.Usernoti}>
        <View style={styles.notiContainer}>
          <View style={styles.notiLeft}>
            <View style={styles.notiProfile}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',

                  width: 44,
                  height: 44,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}></Image>
            </View>
            <View style={styles.notiNname}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16}}>
                  <Text style={{fontWeight: '600' as FontWeight}}>
                    craig_love
                  </Text>{' '}
                  <Text> mentioned you in a comment: </Text>
                  <Text style={{color: '#0B0080 '}}>@jacob_w </Text>
                  <Text>exactly..</Text>
                  <Text style={styles.time}>{'    '}2d</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.notiRight}>
            <Image
              style={{width: 44, height: 44}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAka5rKvEsScdbYyJWEwwgwhkYP8dWC2ObA&usqp=CAU',
              }}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotComment;

const styles = StyleSheet.create({
  Usernoti: {},

  notiContainer: {
    height: 72,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notiLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // width:
    marginRight: 30,
  },
  notiRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 15,
  },
  notiBox: {width: 62, height: 81, marginRight: 20},
  notiProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
    marginRight: 8,
  },
  notiNname: {
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
  notiProfileName: {},
});
