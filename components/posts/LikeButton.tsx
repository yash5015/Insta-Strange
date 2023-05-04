import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
const LikeButton = ({Doubletriggered}) => {
  const liked = useSharedValue(0);
  const [doubletrigg, setDoubletrigg] = useState(false);
  // console.log('Doubletriggered', Doubletriggered, doubletrigg);
  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
    };
  });
  const triggered = () => {
    liked.value = withSpring(liked.value ? 0 : 1);
  };
  useEffect(() => {
    if (Doubletriggered > 0 && Doubletriggered < 210 && liked.value === 0) {
      triggered();
      setDoubletrigg(!doubletrigg);
      // console.log('triggered!!!');
    }
    // console.log('chala');
  });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <Image
          source={require('../../assets/like.png')}
          style={{marginLeft: 16, width: 24, height: 24}}></Image>
      </Animated.View>

      <Animated.View style={fillStyle}>
        <Image
          source={require('../../assets/like-red.png')}
          style={{marginLeft: 16, width: 24, height: 24}}></Image>
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
