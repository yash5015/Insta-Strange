import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotiLike from './NotiTypes/NotiLike';
import {FontWeight} from '../../typeDefines';
import {ScrollView} from 'react-native-gesture-handler';
import NotiFollow from './NotiTypes/NotiFollow';
import NotiFollowBack from './NotiTypes/NotiFollowBack';
import NotComment from './NotiTypes/NotComment';

const Notifies = () => {
  return (
    <ScrollView>
      <View style={styles.newNoti}>
        <View>
          <Text style={styles.dateTime}>New</Text>
          <NotiLike />
          <NotiFollow />
          <NotiFollowBack />
        </View>
      </View>
      <View style={styles.TodayNoti}>
        <Text style={styles.dateTime}>Today</Text>
        <NotiLike />
      </View>
      <View style={styles.ThisWeekNoti}>
        <Text style={styles.dateTime}>This Week</Text>
        <NotComment />
      </View>
      <View style={styles.ThisMonthNoti}>
        <Text style={styles.dateTime}>This Month</Text>
        <NotiLike />
        <NotiFollow />
        <NotComment />
        <NotiFollowBack />
        <NotComment />
      </View>
    </ScrollView>
  );
};

export default Notifies;

const styles = StyleSheet.create({
  dateTime: {
    fontWeight: '500' as FontWeight,
    fontSize: 17,
    paddingLeft: 15,
    paddingVertical: 13,
  },
  newNoti: {borderBottomWidth: 0.2},
  TodayNoti: {borderBottomWidth: 0.2},
  ThisWeekNoti: {borderBottomWidth: 0.2},
  ThisMonthNoti: {borderBottomWidth: 0.2},
});
