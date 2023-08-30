import React from 'react';

import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Detail Screen</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export default DetailScreen;
