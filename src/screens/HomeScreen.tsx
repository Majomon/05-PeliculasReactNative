import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default HomeScreen;
