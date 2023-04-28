import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
import PaginationDot from 'react-native-animated-pagination-dot';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{color: 'white'}}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};
const postImages = [
  {
    id: 1,
    imgurl:
      'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
  },
  {
    id: 2,
    imgurl:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 3,
    imgurl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTgspjPM83-qZ3u1IgMgudydzr0eOfTA53jTekMNvy8jzG-53ZAnrm0moEcSjdcc96U&usqp=CAU',
  },
  {
    id: 4,
    imgurl:
      'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg',
  },
  {
    id: 5,
    imgurl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTgspjPM83-qZ3u1IgMgudydzr0eOfTA53jTekMNvy8jzG-53ZAnrm0moEcSjdcc96U&usqp=CAU',
  },
];

const PostSwipers = (): JSX.Element => {
  const [curPage, setCurPage] = useState(0);
  return (
    <View>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
        onIndexChanged={index => {
          setCurPage(index);
        }}>
        {postImages.map((item, id) => (
          <View key={id} style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: `${item.imgurl}`,
              }}
            />
          </View>
        ))}
      </Swiper>

      <View style={styles.LCSsave}>
        <View style={styles.LCSsaveMid}>
          <PaginationDot
            activeDotColor={'#3897F0'}
            inactiveDotColor={'#00000075'}
            curPage={curPage}
            maxPage={postImages.length}
          />
        </View>
      </View>
    </View>
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
  LCSsave: {
    width: '100%',
    position: 'absolute',
    bottom: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
});
