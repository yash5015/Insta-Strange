import React, {useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const BigLike = () => {
  const scale = useSharedValue(0);
  const opacity = useDerivedValue(() => {
    return scale.value;
  });
  const bounce = () => {
    scale.value = withTiming(1, {
      duration: 500,
      easing: Easing.bounce,
    });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });
  const containerRef = useRef(null);
  return (
    // <View style={styles.container} ref={containerRef} onLayout={() => bounce()}>
    //   <Animated.View style={[styles.box, animatedStyle]}>

    //   </Animated.View>
    // </View>
    <Icon name="heart" size={70} color={'#fff'} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    aspectRatio: 1,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BigLike;
