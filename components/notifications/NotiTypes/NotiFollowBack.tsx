import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontWeight} from '../../../typeDefines';
import {useNavigation} from '@react-navigation/native';
const NotiFollow = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Usernoti}>
        <View style={styles.notiContainer}>
          <View style={styles.notiLeft}>
            <View style={styles.notiProfile}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZhqIuYrdZ8tyjG-29KZ1ryjAEDaHo3wTRg&usqp=CAU',
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
                    msi_potter
                  </Text>{' '}
                  starated following you.{' '}
                  <Text style={styles.time}>{'    '}1h</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.notiRight}>
            {/* <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg',
              }}
              style={styles.likedImage}></Image> */}
            <Pressable onPress={() => navigation.navigate('Chats')}>
              <View style={styles.msgBtn}>
                <Text
                  style={{
                    fontWeight: '500' as FontWeight,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Follow
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotiFollow;

const styles = StyleSheet.create({
  Usernoti: {},
  msgBtn: {
    // padding: 7,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#3797EF',
    width: 90,
    height: 28,
    justifyContent: 'center',
  },
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
  likedImage: {
    width: 44,
    height: 44,
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
