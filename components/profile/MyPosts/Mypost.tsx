import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from '@rneui/base';
import LongPressProfileView from '../../ProfilePostView/LongPressProfileView';
import InstaPosts from '../../posts/InstaPosts';
import {FontWeight} from '../../../typeDefines';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const Mypost = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [postsArr, setPostArr] = useState([]);
  const [postId, setPostId] = useState(0);
  const [Scrollenabled, setScrollenabled] = useState(true);
  const [selected, setSelected] = useState(null);
  let layout = {};

  // const likeRef = React.createRef();
  // const shareRef = React.createRef();
  // const commentRef = React.createRef();
  // const saveRef = React.createRef();

  let postArray = [];
  const renderPosts = () => {
    for (let i = 0; i < 160; i++) {
      postArray.push(`../../../assets/sampleImg1.jpg`);
    }
    // console.log(postArray);
  };
  const handleProfilePostView = id => {
    console.log(id, 'on single cick');

    navigation.navigate('ProfilePostView', {
      ImgIndex: id,
      postsArr: postsArr,
    });
  };
  const handleSingleProfileVew = id => {
    console.log(id, 'on long press');
    setScrollenabled(false);
    setPostId(id);
    setModalVisible(true);
  };

  useEffect(() => {
    renderPosts();
    setPostArr([...postArray]);
  }, []);
  return (
    <>
      {/* onLongPress={() => handleSingleProfileVew(id)}
                    {...panResponder.panHandlers}
                     onPressOut={() => setModalVisible(!modalVisible)} */}
      <ScrollView
        style={styles.gridPostcontainer}
        scrollEnabled={Scrollenabled}>
        <View style={styles.postContainer}>
          <View style={styles.myPostRow}>
            {postsArr
              ? postsArr.map((item, id) => (
                  <TouchableOpacity
                    key={id}
                    style={styles.myPost}
                    onPress={() => handleProfilePostView(id)}>
                    <Image
                      source={require(`../../../assets/sampleImg1.jpg`)}
                      style={styles.myPostsmImg}></Image>
                  </TouchableOpacity>
                ))
              : null}
          </View>
        </View>
      </ScrollView>
      {modalVisible ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            {/* <LongPressProfileView
                photo_Id={postId}
                Totalpost={postsArr}
                modalvisible={modalVisible}
              /> */}
            <View style={styles.PreviewpostContainer}>
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
                        style={{flexDirection: 'row', alignItems: 'center'}}>
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
                      uri: `${postsArr[postId]}`,
                    }}
                    style={styles.myPostImg}></Image>
                </View>
                <View style={styles.PostLCSMFooter}>
                  <Image
                    source={require('../../../assets/like.png')}
                    style={styles.lcsmIcon}></Image>
                  <Image
                    source={require('../../../assets/comment.png')}
                    style={styles.lcsmIcon}></Image>
                  <Image
                    source={require('../../../assets/send.png')}
                    style={styles.lcsmIcon}></Image>

                  <Image
                    source={require('../../../assets/save.png')}
                    style={styles.lcsmIcon}></Image>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </>
  );
};

export default Mypost;

const styles = StyleSheet.create({
  gridPostcontainer: {
    // backgroundColor: 'yellow',
    flex: 1,
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
    // height: 120,
    aspectRatio: 1,
    margin: 0.3,
  },
  myPostsmImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  // /////////////////////////
  centeredView: {
    backgroundColor: '#1B1A1AEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PreviewpostContainer: {
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
  PostBox: {},
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
