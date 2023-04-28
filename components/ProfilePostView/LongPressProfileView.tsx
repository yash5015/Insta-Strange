import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontWeight} from '../../typeDefines';
const {height, width} = Dimensions.get('window');

const LongPressProfileView = ({photo_Id, Totalpost, modalvisible}) => {
  const [modalVisible, setModalVisible] = useState(modalvisible);
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
        <View>
          <Image
            source={{
              uri: `${Totalpost[photo_Id]}`,
            }}
            style={styles.myPostImg}></Image>
        </View>
        <View style={styles.PostLCSMFooter}>
          <Image
            source={require('../../assets/like.png')}
            style={styles.lcsmIcon}></Image>
          <Image
            source={require('../../assets/comment.png')}
            style={styles.lcsmIcon}></Image>
          <Image
            source={require('../../assets/send.png')}
            style={styles.lcsmIcon}></Image>

          <Image
            source={require('../../assets/save.png')}
            style={styles.lcsmIcon}></Image>
        </View>
      </View>
    </View>
  );
};

export default LongPressProfileView;

const styles = StyleSheet.create({
  postContainer: {
    width: width - 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    // alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  postImg: {width: 32, height: 32, borderRadius: 50},
  postHead: {
    flexDirection: 'row',
    height: 54,
    alignContent: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  myPostImg: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '600' as FontWeight,
  },
  postUser: {flexDirection: 'row'},
  postAddress: {fontSize: 12},
  postMenu: {
    fontSize: 18,
    fontWeight: '700' as FontWeight,
  },
  lcsmIcon: {width: 24, height: 24},
  PostLCSMFooter: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
