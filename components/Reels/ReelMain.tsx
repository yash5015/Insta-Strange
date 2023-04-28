import {
  Alert,
  LogBox,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LongPressProfileView from '../ProfilePostView/LongPressProfileView';
// import ReelsData from '../../DataCollection/Reels/ReelsData';

const ReelMain = () => {
  // const handleSingleProfileVew = id => {
  //   console.log(id);

  //   // return <LongPressProfileView photo_Id={id} Totalpost={[]} />;
  //   return (
  //     <View
  //       style={{
  //         height: 500,
  //         width: '100%',
  //         backgroundColor: 'yellow',
  //         zIndex: 10000,
  //         position: 'absolute',
  //         top: 0,
  //       }}>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //       <Text>hihi</Text>
  //     </View>
  //   );
  // };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text>Reels</Text>
      <Text>Reels</Text>
      <Text>Reels</Text>
      <Pressable onLongPress={() => setModalVisible(true)}>
        <Text>Reels</Text>
      </Pressable>
      {modalVisible ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                onPressOut={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : null}

      {/* <LongPressProfileView photo_Id={100} Totalpost={[]} /> */}
    </View>
  );
};

export default ReelMain;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
