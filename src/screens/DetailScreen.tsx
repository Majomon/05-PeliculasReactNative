import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  /*   const movie = route.params as Movie;
  console.log(movie.title); */
  const movie = route.params;

  return (
    <View>
      <Text style={{color: 'black'}}>Detail Screen</Text>
    </View>
  );
};

export default DetailScreen;
