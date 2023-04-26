import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InstaStories from '../story/InstaStories';
import {FontWeight} from '../../typeDefines';

import ProfilePostsSection from './ProfilePostsSection';
const {height, width} = Dimensions.get('window');
const ProfileBio = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
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
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: width,
        }}>
        <ProfilePostsSection />
      </ScrollView>
    </ScrollView>
  );
};

export default ProfileBio;

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
});
