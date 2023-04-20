import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InstaStories = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.stories}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.storyBox}>
        <View style={styles.storyProfile}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/9c/d9/4d/9cd94db59046305e5d4e0190429cd750--amazing-sunsets-summer-beach.jpg',
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',

              width: 55,
              height: 55,
              borderRadius: 50,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View style={styles.storyProfileName}>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>Your Story</Text>
        </View>
      </View>
      <View style={styles.storyBox}>
        <View style={styles.storyProfile}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',

              width: 55,
              height: 55,
              borderRadius: 50,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View style={styles.storyProfileName}>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>Karennne</Text>
        </View>
      </View>
      <View style={styles.storyBox}>
        <View style={styles.storyProfile}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngTgspjPM83-qZ3u1IgMgudydzr0eOfTA53jTekMNvy8jzG-53ZAnrm0moEcSjdcc96U&usqp=CAU',
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',

              width: 55,
              height: 55,
              borderRadius: 50,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View style={styles.storyProfileName}>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>ZackJohn</Text>
        </View>
      </View>
      <View style={styles.storyBox}>
        <View style={styles.storyProfile}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg',
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',

              width: 55,
              height: 55,
              borderRadius: 50,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View style={styles.storyProfileName}>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>Kierron_d</Text>
        </View>
      </View>
      <View style={styles.storyBox}>
        <View style={styles.storyProfile}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcaFwJtbMOL5s0nVOazZq0Ca0ICBeLudLa1yEzhFS-p4CjuMVhbuXi_opeouD-mZg2d0&usqp=CAU',
            }}
            style={{
              position: 'absolute',
              alignSelf: 'center',

              width: 55,
              height: 55,
              borderRadius: 50,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View style={styles.storyProfileName}>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>Craig_joe</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InstaStories;

const styles = StyleSheet.create({
  stories: {
    padding: 10,
    borderBottomWidth: 0.2,
    borderColor: 'lightgrey',
  },
  storyBox: {width: 62, height: 81, marginRight: 20},
  storyProfile: {
    width: 62,
    height: 62,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
  },
  storyProfileName: {},
});
