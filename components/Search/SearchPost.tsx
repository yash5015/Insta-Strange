import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchPost = () => {
  return (
    <View>
      <View style={styles.gridPostcontainer}>
        <View style={styles.postContainer}>
          <View style={styles.myPostRow}>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>

            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
            <View style={styles.myPost}>
              <Image
                source={{
                  uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
                }}
                style={styles.myPostImg}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchPost;

const styles = StyleSheet.create({
  gridPostcontainer: {
    // backgroundColor: 'yellow',
  },

  postContainer: {
    // width: '100%',
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
  myPostImg: {
    width: '100%',
    height: '100%',
  },
});
