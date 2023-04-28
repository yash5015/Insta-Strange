import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMain from './HomeMain';
import SearchMain from './Search/SearchMain';
import AddpostMain from './AddPost/AddpostMain';
import ReelMain from './Reels/ReelMain';
import Profile from './profile/Profile';
import Notification from './notifications/Notification';
import CustomFooterNavigation from './CustomFooterNavigation';
import ProfilePostView from './ProfilePostView/ProfilePostView';
const Tab = createBottomTabNavigator();
const FooterNavigation = ({...params}) => {
  const navigation = useNavigation();
  return (
    // <CustomFooterNavigation {...props} />
    <Tab.Navigator
      tabBar={props => <CustomFooterNavigation {...props} />}
      initialRouteName={'HomeMain'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeMain" component={HomeMain} />
      <Tab.Screen name="SearchMain" component={SearchMain} />
      <Tab.Screen
        name="AddpostMain"
        component={AddpostMain}
        options={{tabBarStyle: {display: 'none'}}}
      />
      <Tab.Screen name="ReelMain" component={ReelMain} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ProfilePostView"
        component={ProfilePostView}
        options={{
          headerLeft: () => (
            <Text onPress={() => navigation.navigate('Profile')}>Back</Text>
          ),
          headerTitle: 'Posts',
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopColor: 'lightgrey',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  footerIcons: {width: 24, height: 24},
  gotoHome: {},
  gotoSearch: {},
  gotoAddPost: {},
  gotoReels: {},
  gotoProfile: {},
  storyProfile: {
    width: 27,
    height: 27,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#98d547',
    justifyContent: 'center',
  },
});
