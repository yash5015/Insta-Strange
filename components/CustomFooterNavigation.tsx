import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const CustomFooterNavigation = ({state, descriptors, navigation}) => {
  const route = useRoute();
  // console.log(state);
  // console.log('-----------------------');
  // console.log(descriptors);
  // console.log('-----------------------');
  // console.log(route.path);
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
        <Pressable onPress={() => navigation.navigate('SearchMain')}>
          <View style={styles.gotoSearch}>
            <Image
              style={styles.footerIcons}
              source={require('../assets/search.png')}></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AddpostMain')}>
          <View style={styles.gotoAddPost}>
            <Image
              style={styles.footerIcons}
              source={require('../assets/AddPost.png')}></Image>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ReelMain')}>
          <View style={styles.gotoReels}>
            <Image
              source={require('../assets/reelsIcon.png')}
              style={[styles.footerIcons]}></Image>
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

export default CustomFooterNavigation;

const styles = StyleSheet.create({
  footer: {
    position: 'relative',
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
