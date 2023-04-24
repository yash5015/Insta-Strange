import React, {Component} from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{color: 'white'}}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const renderDots = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        zIndex: 1,
      }}
    />
  );
};

const renderActiveDot = () => {
  return (
    <View
      style={{
        backgroundColor: '#007aff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      }}
    />
  );
};
const PostSwipers = (): JSX.Element => {
  return (
    <Swiper
      style={styles.wrapper}
      renderPagination={renderPagination}
      loop={false}
      dot={renderDots}
      activeDot={renderActiveDot}>
      <View
        style={styles.slide}
        // title={
        //   <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
        // }
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
          }}
        />
      </View>
      <View
        style={styles.slide}
        // title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
        />
      </View>
      <View
        style={styles.slide}
        // title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTgspjPM83-qZ3u1IgMgudydzr0eOfTA53jTekMNvy8jzG-53ZAnrm0moEcSjdcc96U&usqp=CAU',
          }}
        />
      </View>
      <View
        style={styles.slide}
        // title={
        //   <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
        // }
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg',
          }}
        />
      </View>
    </Swiper>
  );
};

export default PostSwipers;

const styles = StyleSheet.create({
  wrapper: {height: width - 10},
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
  paginationStyle: {
    position: 'absolute',
    // bottom: 10,
    // right: 10,
    width: 34,
    height: 26,
    zIndex: 1,
    right: 0,
    borderRadius: 19,
    backgroundColor: '#12121270',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 12,
  },
  paginationText: {
    // color: 'white',
    // fontSize: 20,
  },
});
