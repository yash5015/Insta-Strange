import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {FontWeight} from '../../typeDefines';
import {useNavigation} from '@react-navigation/native';

const NotificatonHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.NotiHeaderContainer}>
      <Pressable onPress={() => navigation.navigate('HomeMain')}>
        <Image source={require('../../assets/back.png')}></Image>
      </Pressable>

      <View>
        <Text
          style={{
            color: '#000',
            fontSize: 22,
            fontWeight: '600' as FontWeight,
            marginLeft: 20,
          }}>
          Notification
        </Text>
      </View>
    </View>
  );
};

export default NotificatonHeader;

const styles = StyleSheet.create({
  NotiHeaderContainer: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
});
