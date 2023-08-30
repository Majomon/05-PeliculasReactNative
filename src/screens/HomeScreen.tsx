import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  console.log(moviesInCinema[2]?.title);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
