import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />
      <View style={styles.btn}>
        <Button title="FadeIn" onPress={() => fadeIn} />
      </View>
      <View style={styles.btn}>
        <Button title="FadeOut" onPress={() => fadeOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 50,
  },
});
