import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FooterNavigation from '../FooterNavigation';
import {ScrollView} from 'react-native-gesture-handler';
import PostSwipers from '../posts/PostSwipers';
import SearchBox from '../SearchBox';
import SearchPost from './SearchPost';

const SearchMain = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.sbox}>
        <SearchBox />
        <View style={styles.liveBox}>
          <Image source={require('../../assets/Live.png')}></Image>
        </View>
      </View>
      <ScrollView>
        {/* <PostSwipers /> */}
        <SearchPost />
      </ScrollView>
      {/* <FooterNavigation /> */}
    </View>
  );
};

export default SearchMain;

const styles = StyleSheet.create({
  sbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  liveBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
