import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FooterNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <View style={styles.gotoHome}>
          <Pressable onPress={() => navigation.navigate('HomeMain')}>
            <Image
              style={styles.footerIcons}
              source={require('../assets/home-fill.png')}></Image>
          </Pressable>
        </View>
        <Pressable onPress={() => navigation.navigate('HomeMain')}>
          <View style={styles.gotoSearch}>
            <Image
              style={styles.footerIcons}
              source={require('../assets/search.png')}></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('StoryView')}>
          <View style={styles.gotoAddPost}>
            <Image
              style={styles.footerIcons}
              source={require('../assets/AddPost.png')}></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PostSwipers')}>
          <View style={styles.gotoReels}>
            <Image
              source={require('../assets/reelsIcon.png')}
              style={styles.footerIcons}></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <View style={styles.gotoProfile}>
            <View style={styles.storyProfile}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',

                  width: 22,
                  height: 22,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}></Image>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopColor: 'lightgrey',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  footerIcons: {width: 24, height: 24},
  gotoHome: {},
  gotoSearch: {},
  gotoAddPost: {},
  gotoReels: {},
  gotoProfile: {},
  storyProfile: {
    width: 27,
    height: 27,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
  },
});
