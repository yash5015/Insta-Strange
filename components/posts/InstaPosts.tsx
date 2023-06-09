import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, {useState} from 'react';
import {FontWeight} from '../../typeDefines';
import PostSwipers from './PostSwipers';
import SinglePost from './SinglePost';
import LikeButton from './LikeButton';
import BigLike from './BigLike';

const {height, width} = Dimensions.get('window');

const InstaPosts = ({multiple}) => {
  const [Liked, setLiked] = useState(false);

  const [DoubleLiked, setDoubleLiked] = useState(false);
  const [DoubleTrigg, setDoubleTrigg] = useState(false);
  const [Comment, setComment] = useState(false);
  const [Share, setShare] = useState(false);
  const [lastPress, setLastPress] = useState(0);
  const [timeDelta, setTimeDelta] = useState(0);
  const handleDoubleClick = () => {
    let delta = new Date().getTime() - lastPress;

    if (delta < 210) {
      console.log(delta, 'double clicked!!');
      setLiked(true);
      setDoubleLiked(true);
      setTimeDelta(delta);
      console.log('step first');
      setInterval(() => {
        setDoubleLiked(false);

        console.log('step second');
      }, 1000);
      console.log('step Third');
    } else {
      setTimeDelta(delta);
    }
    setLastPress(new Date().getTime());
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.PostBox}>
        <View style={styles.postHead}>
          <View style={styles.postUser}>
            <Image
              style={styles.postImg}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZvNXJYdl0uUzKj7gqgpe_OxRtw2FFvH21k0Pyq0Q3Eh8X49bKtZlLjajfU2erdn7BQA&usqp=CAU',
              }}></Image>
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.name}>joshua_I </Text>
                <Image
                  style={{width: 12, height: 12}}
                  source={{
                    uri: 'https://www.pinpng.com/pngs/m/57-577224_free-png-download-instagram-verified-logo-png-images.png',
                  }}></Image>
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
          {multiple ? (
            <SinglePost Likepost={handleDoubleClick} />
          ) : (
            <PostSwipers Likepost={handleDoubleClick} />
          )}
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
};

export default InstaPosts;

const styles = StyleSheet.create({
  postContainer: {},
  postImg: {width: 32, height: 32, borderRadius: 50},
  PostBox: {marginBottom: 10},
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
  image: {
    width: width,
    height: width,
    resizeMode: 'cover',
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
});
