import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontWeight} from '../../../typeDefines';
const NotiLike = () => {
  return (
    <View>
      <View style={styles.Usernoti}>
        <View style={styles.notiContainer}>
          <View style={styles.notiLeft}>
            <View style={styles.notiProfile}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgu-z9EAv11FWiiAmKJaPWbMa_6D0H8jmmw&usqp=CAU',
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
                    karennne
                  </Text>{' '}
                  liked you photo.
                  <Text style={styles.time}>{'    '}now</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.notiRight}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg',
              }}
              style={styles.likedImage}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotiLike;

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
