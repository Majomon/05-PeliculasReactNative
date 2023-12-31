import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      //Valor al que se va a ir
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      //Valor al que se va a ir
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {fadeIn, fadeOut, opacity};
};
