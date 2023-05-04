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
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FontWeight} from '../../typeDefines';
import PostSwipers from '../posts/PostSwipers';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikeButton from '../posts/LikeButton';
import BigLike from '../posts/BigLike';
import SinglePost from '../posts/SinglePost';
const {width, height} = Dimensions.get('window');
const ProfilePostView = ({route, navigation}) => {
  const {ImgIndex} = route.params;
  const flatListRef = useRef(null);
  const [MypostsArr, setMypostsArr] = useState([]);
  const [PostContainerHeight, setPostContainerHeight] = useState();
  const [ActivityLoading, setActivityLoading] = useState(true);
  const scrollToIndexFunc = index => {
    console.log('inside function', index);
    flatListRef.current.scrollToIndex({animated: false, index});
  };
  const scroltoindexfailed = index => {
    const wait = new Promise(resolve => setTimeout(resolve, 1000));
    wait.then(() => {
      scrollToIndexFunc(index);
      setActivityLoading(false);
    });
  };

  const [Liked, setLiked] = useState(false);

  const [DoubleLiked, setDoubleLiked] = useState(false);
  const [DoubleTrigg, setDoubleTrigg] = useState(false);
  const [Comment, setComment] = useState(false);
  const [Share, setShare] = useState(false);
  const [lastPress, setLastPress] = useState(0);
  const [timeDelta, setTimeDelta] = useState(0);
  const handleDoubleClick = () => {
    let delta = new Date().getTime() - lastPress;
    console.log(delta);
    if (delta < 210) {
      setLiked(true);
      setDoubleLiked(true);
      setTimeDelta(delta);
      setInterval(() => setDoubleLiked(false), 1500);
    } else {
      setTimeDelta(delta);
    }
    setLastPress(new Date().getTime());
  };

  const getMyPosts = async getkey => {
    try {
      const jsonValue = await AsyncStorage.getItem(getkey);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (jsonValue !== null) {
        setMypostsArr(JSON.parse(jsonValue));
        console.log(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
      console.log('Error occured in fetching post from async storage');
    }
  };

  useEffect(() => {
    getMyPosts('MyPosts');
  }, []);
  useEffect(() => {
    console.log('again');
    setActivityLoading(true);
    scroltoindexfailed(ImgIndex);
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

  const getItemCount = _data => MypostsArr.length;

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

        <View style={styles.postPhotu}>
          {DoubleLiked ? (
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BigLike />
            </View>
          ) : null}
          {/* {multiple ? (
            <SinglePost Likepost={handleDoubleClick} />
          ) : (
            <PostSwipers Likepost={handleDoubleClick} />
          )} */}
          <View style={styles.slide}>
            <Pressable onPress={handleDoubleClick}>
              <Image
                style={styles.image}
                source={require('../../assets/sampleImg1.jpg')}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.LCSsave}>
          <View style={styles.LCSsaveLeft}>
            <LikeButton Doubletriggered={timeDelta} />
            <Pressable>
              <Image
                source={require('../../assets/comment.png')}
                style={{marginLeft: 16, width: 24, height: 24}}></Image>
            </Pressable>
            <Pressable>
              <Image
                source={require('../../assets/send.png')}
                style={{marginLeft: 16, width: 24, height: 24}}></Image>
            </Pressable>
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
      {ActivityLoading ? (
        <View style={styles.loadingcss}>
          <ActivityIndicator />
        </View>
      ) : null}
      {MypostsArr ? (
        <VirtualizedList
          ref={flatListRef}
          getItemCount={getItemCount}
          getItem={getItem}
          maxToRenderPerBatch={2 * MypostsArr.length + 1}
          windowSize={2 * MypostsArr.length + 1}
          onScrollToIndexFailed={info => {
            scroltoindexfailed(info.index);
          }}
          // getItemLayout={(data, index) => ({
          //   length: PostContainerHeight,
          //   offset: PostContainerHeight * index,
          //   index,
          // })}
          data={MypostsArr}
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
  loadingcss: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'grey',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
