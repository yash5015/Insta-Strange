import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Image
        source={require('../assets/searchIcon.png')}
        style={{marginRight: 9}}></Image>

      <TextInput style={styles.searchBar} placeholder="Search"></TextInput>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    width: '90%',
    height: 36,
    paddingHorizontal: 14,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    borderRadius: 10,
    marginVertical: 4,
  },
  searchBar: {
    width: '100%',
  },
});
