import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FooterNavigation = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <View style={styles.gotoHome}>
          <Image
            style={styles.footerIcons}
            source={require('../assets/Home.png')}></Image>
        </View>
        <View style={styles.gotoSearch}>
          <Image
            style={styles.footerIcons}
            source={require('../assets/search.png')}></Image>
        </View>
        <View style={styles.gotoAddPost}>
          <Image
            style={styles.footerIcons}
            source={require('../assets/AddPost.png')}></Image>
        </View>
        <View style={styles.gotoLikes}>
          <Image source={require('../assets/like.png')}></Image>
        </View>
        <View style={styles.gotoProfile}>
          <Image
            style={styles.footerIcons}
            source={require('../assets/ProfileIcon.png')}></Image>
        </View>
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
    justifyContent: 'space-between',
    padding: 12,
  },
  footerIcons: {width: 26, height: 26},
  gotoHome: {},
  gotoSearch: {},
  gotoAddPost: {},
  gotoLikes: {},
  gotoProfile: {},
});
