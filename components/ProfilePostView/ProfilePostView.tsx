import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  ActivityIndicator,
  VirtualizedList,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FontWeight} from '../../typeDefines';
import PostSwipers from '../posts/PostSwipers';
import {FlatList} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const ProfilePostView = ({route, navigation}) => {
  const {ImgIndex, postsArr} = route.params;
  const flatListRef = useRef(null);
  const [PostContainerHeight, setPostContainerHeight] = useState();
  const scrollToIndex = index => {
    console.log('inside function', index);
    flatListRef.current.scrollToIndex({animated: false, index});
  };
  const scroltoindexfailed = ({info}) => {
    const wait = new Promise(resolve => setTimeout(resolve, 2000));
    wait.then(() => {
      scrollToIndex(info.index);
    });
  };
  useEffect(() => {
    console.log('again');
    scrollToIndex(ImgIndex);
  }, [ImgIndex]);

  const handleLayout = event => {
    console.log('handleLayout');
    const {height} = event.nativeEvent.layout;
    setPostContainerHeight(height);
  };
  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemCount = _data => postsArr.length;
  const loading = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#00075'}}>
        <ActivityIndicator />;
      </View>
    );
  };
  const renderItem = ({item, index}) => (
    <View
      key={index}
      style={styles.postContainer}
      // onLayout={handleLayout}
    >
      <View style={styles.PostBox}>
        <View style={styles.postHead}>
          <View style={styles.postUser}>
            <Image
              style={styles.postImg}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZvNXJYdl0uUzKj7gqgpe_OxRtw2FFvH21k0Pyq0Q3Eh8X49bKtZlLjajfU2erdn7BQA&usqp=CAU',
              }}></Image>
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.name}>joshua_I </Text>
                <Image
                  style={{width: 12, height: 12}}
                  source={{
                    uri: 'https://www.pinpng.com/pngs/m/57-577224_free-png-download-instagram-verified-logo-png-images.png',
                  }}></Image>
                <Text>{index}</Text>
              </View>
              <Text style={styles.postAddress}>Tokyo, Japan</Text>
            </View>
          </View>
          <View>
            <Text style={styles.postMenu}>...</Text>
          </View>
        </View>

        {/* <PostSwipers /> */}
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/sampleImg1.jpg')}
          />
        </View>
        <View style={styles.LCSsave}>
          <View style={styles.LCSsaveLeft}>
            <Image
              source={require('../../assets/like.png')}
              style={{
                marginLeft: 16,
                width: 24,
                height: 24,
              }}></Image>
            {/* <LikeButton /> */}
            <Image
              source={require('../../assets/comment.png')}
              style={{
                marginLeft: 16,
                width: 24,
                height: 24,
              }}></Image>
            <Image
              source={require('../../assets/send.png')}
              style={{
                marginLeft: 16,
                width: 24,
                height: 24,
              }}></Image>
          </View>

          {/* <Text style={[styles.postMenu, {fontSize: 30}]}>...</Text> */}
          <View style={styles.LCSsaveRight}>
            <Image
              source={require('../../assets/save.png')}
              style={{width: 24, height: 22}}></Image>
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
  return (
    <View>
      {postsArr ? (
        <VirtualizedList
          ref={flatListRef}
          getItemCount={getItemCount}
          getItem={getItem}
          maxToRenderPerBatch={2 * postsArr.length + 1}
          windowSize={2 * postsArr.length + 1}
          onScrollToIndexFailed={info => {
            scroltoindexfailed(info);
          }}
          // getItemLayout={(data, index) => ({
          //   length: PostContainerHeight,
          //   offset: PostContainerHeight * index,
          //   index,
          // })}
          data={postsArr}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
};

export default ProfilePostView;

const styles = StyleSheet.create({
  postContainer: {},
  postImg: {width: 32, height: 32, borderRadius: 50},
  PostBox: {},
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
  slide: {
    width: width,
    height: width,
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: width,
    height: width,
    resizeMode: 'cover',
  },
});
