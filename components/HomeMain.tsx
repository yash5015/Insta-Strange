import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InstaStories from './story/InstaStories';
import InstaPosts from './posts/InstaPosts';
import FooterNavigation from './FooterNavigation';
import {useNavigation} from '@react-navigation/native';
import {FontWeight} from '../typeDefines';
const HomeMain = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={styles.instalogo}>
            <Image
              style={{width: 106, height: 30}}
              source={require('../assets/instaLogo.png')}></Image>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.likes}>
              <Pressable onPress={() => navigation.navigate('Notification')}>
                <Image
                  source={require('../assets/like.png')}
                  style={{width: 24, height: 24}}></Image>
              </Pressable>
            </View>
            <View style={styles.messages}>
              <Pressable onPress={() => navigation.navigate('Chats')}>
                <Image
                  source={require('../assets/chat.png')}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: 'contain',
                  }}></Image>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <InstaStories multiple={false} />
        <InstaPosts multiple={true} />
        <InstaPosts multiple={false} />
        <InstaPosts multiple={true} />
        <InstaPosts multiple={false} />
        <InstaPosts multiple={false} />
        <InstaPosts multiple={true} />
        <InstaPosts multiple={true} />
        <InstaPosts multiple={false} />
      </ScrollView>
      {/* <FooterNavigation /> */}
    </View>
  );
};

export default HomeMain;

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
