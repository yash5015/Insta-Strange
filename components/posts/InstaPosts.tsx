import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InstaPosts = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.PostBox}>
        <View style={styles.postHead}>
          <View style={styles.postUser}>
            <Image
              style={styles.postImg}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZvNXJYdl0uUzKj7gqgpe_OxRtw2FFvH21k0Pyq0Q3Eh8X49bKtZlLjajfU2erdn7BQA&usqp=CAU',
              }}></Image>
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.name}>joshua_I </Text>
                <Image
                  style={{width: 12, height: 12}}
                  source={{
                    uri: 'https://www.pinpng.com/pngs/m/57-577224_free-png-download-instagram-verified-logo-png-images.png',
                  }}></Image>
              </View>
              <Text style={styles.postAddress}>Tokyo, Japan</Text>
            </View>
          </View>
          <View>
            <Text style={styles.postMenu}>...</Text>
          </View>
        </View>
        <View style={styles.postPhotu}>
          <View
            style={{
              width: 34,
              height: 26,
              position: 'absolute',
              zIndex: 1,
              right: 0,
              borderRadius: 19,
              backgroundColor: '#12121270',
              justifyContent: 'center',
              marginRight: 12,
              marginTop: 12,
            }}>
            <Text
              style={[
                styles.postMenu,
                {
                  fontWeight: '400' as FontWeight,
                  fontSize: 12,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              1/3
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
            }}
            style={{width: 375, height: 375, resizeMode: 'cover'}}></Image>
        </View>
        <View style={styles.LCSsave}>
          <View style={styles.LCSsaveLeft}>
            <Image
              source={require('../../assets/like.png')}
              style={{marginLeft: 12, width: 24, height: 21}}></Image>
            <Image
              source={require('../../assets/Comment.png')}
              style={{marginLeft: 12, width: 22, height: 23}}></Image>
            <Image
              source={require('../../assets/messageLogo.png')}
              style={{marginLeft: 12, width: 23, height: 20}}></Image>
          </View>
          <View style={styles.LCSsaveMid}>
            <Text style={[styles.postMenu, {fontSize: 30}]}>...</Text>
          </View>
          <View style={styles.LCSsaveRight}>
            <Image source={require('../../assets/save.png')}></Image>
          </View>
        </View>
        <View>
          <View style={{padding: 16}}>
            <View style={styles.LikedBy}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTgspjPM83-qZ3u1IgMgudydzr0eOfTA53jTekMNvy8jzG-53ZAnrm0moEcSjdcc96U&usqp=CAU',
                }}
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 50,
                  marginRight: 8,
                }}></Image>
              <Text>
                Liked by{' '}
                <Text style={{fontWeight: '500' as FontWeight}}>
                  craig_love
                </Text>{' '}
                and{' '}
                <Text style={{fontWeight: '500' as FontWeight}}>
                  121 others
                </Text>
              </Text>
            </View>

            <View style={styles.postComments}>
              <Text>
                <Text style={{fontWeight: '500' as FontWeight}}>joshua_I</Text>{' '}
                The game in Japan was amazng and I want to share some photos
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
{
  /* <Text
              style={[
                styles.postMenu,
                {
                  fontSize: 35,
                },
              ]}>
              ...
            </Text> */
}
export default InstaPosts;
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
  postContainer: {},
  postImg: {width: 32, height: 32, borderRadius: 50},
  PostBox: {marginBottom: 10},
  postHead: {
    flexDirection: 'row',
    height: 54,
    alignContent: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '600' as FontWeight,
  },
  postUser: {flexDirection: 'row'},
  postAddress: {fontSize: 12},
  postPhotu: {},
  postMenu: {
    fontSize: 18,
    fontWeight: '700' as FontWeight,
  },

  LCSsave: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  LCSsaveLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 30,
  },
  LCSsaveMid: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LCSsaveRight: {
    marginRight: 13,
  },
  LikedBy: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  postComments: {},
});
