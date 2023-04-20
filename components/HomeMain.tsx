import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InstaStories from './InstaStories';
import InstaPosts from './posts/InstaPosts';
import FooterNavigation from './FooterNavigation';

const HomeMain = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.instalogo}>
            <Image source={require('../assets/instaLogo.png')}></Image>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.likes}>
              <Image source={require('../assets/like.png')}></Image>
            </View>
            <View style={styles.messages}>
              <Image
                source={require('../assets/messageLogo.png')}
                style={{width: 23, height: 20, resizeMode: 'contain'}}></Image>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={{marginBottom: 30}}>
        <InstaStories />
        <InstaPosts />
        <InstaPosts />
        <InstaPosts />
      </ScrollView>
      <FooterNavigation />
    </View>
  );
};

export default HomeMain;
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
  header: {
    zIndex: 2,
    borderBottomWidth: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomColor: 'lightgrey',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  instalogo: {
    width: 105,
    height: 28,
  },
  likes: {marginRight: 20},
  messages: {
    width: 23,
    height: 20,
  },
});
