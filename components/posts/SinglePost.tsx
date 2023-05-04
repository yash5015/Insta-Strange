import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
const SinglePost = ({Likepost}) => {
  const [lastPress, setLastPress] = useState(0);

  return (
    <Pressable onPress={Likepost}>
      <View style={styles.postPhotu}>
        <Image
          source={{
            uri: 'https://carpediemourway.com/wp-content/uploads/2021/03/Good-morning-captions-for-instagram-1.jpg',
          }}
          style={styles.image}></Image>
      </View>
    </Pressable>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
