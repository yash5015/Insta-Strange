import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InstaStories from '../InstaStories';

const ProfileBio = () => {
  return (
    <View>
      <View style={styles.BioBox}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <View style={styles.PhotoBox}>
            <View style={styles.UserProfile}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',

                  width: 85,
                  height: 85,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}></Image>
            </View>
          </View>
          <View style={styles.profileNumbers}>
            <View style={styles.postNumbers}>
              <Text style={{fontSize: 16, fontWeight: '600' as FontWeight}}>
                54
              </Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.followersNumbers}>
              <Text style={{fontSize: 16, fontWeight: '600' as FontWeight}}>
                254
              </Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.followingNumbers}>
              <Text style={{fontSize: 16, fontWeight: '600' as FontWeight}}>
                193
              </Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.BioText}>
          <Text style={{fontWeight: '600' as FontWeight}}>jacob West</Text>
          <Text style={{lineHeight: 17}}>
            Digital goodies designer{' '}
            <Text style={{color: '#3366CC'}}>@pixsellz</Text>{' '}
          </Text>
          <Text>Everything is designed. </Text>
        </View>
        <View style={styles.editProfileButton}>
          <Text style={{fontWeight: '500' as FontWeight}}>Edit Profile</Text>
        </View>
      </View>

      <View style={styles.highlights}>
        <InstaStories />
      </View>
      <View style={styles.postTypeHeader}>
        <View style={styles.totalPosts}>
          <Image source={require('../../assets/GridIcon.png')}></Image>
        </View>
        <View style={styles.taggedPosts}>
          <Image source={require('../../assets/TagIcon.png')}></Image>
        </View>
      </View>
      <View style={styles.gridPostcontainer}>
        <View style={styles.postContainer}>
          <View style={styles.myPostRow}>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>

            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileBio;
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
  BioBox: {paddingHorizontal: 13},
  PhotoBox: {width: 96, height: 96},
  UserProfile: {
    width: 93,
    height: 93,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
  },
  profileNumbers: {
    flex: 1,
    // width: 205,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  postNumbers: {},
  followersNumbers: {},
  followingNumbers: {},
  BioText: {},
  editProfileButton: {
    width: '94%',
    height: 29,
    alignSelf: 'center',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.4,
    borderColor: '#3c3c4310',
    borderRadius: 6,
  },
  highlights: {
    width: '94%',
    alignSelf: 'center',
  },
  gridPostcontainer: {
    // backgroundColor: 'yellow',
    // flex: 1,
  },
  postTypeHeader: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
  },
  totalPosts: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  taggedPosts: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  postContainer: {
    // width: '100%',
    flex: 1,
  },
  myPostRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  myPost: {
    width: '33.1%',
    height: 120,
    margin: 0.3,
  },
});
