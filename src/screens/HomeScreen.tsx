import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
      {/*  <MoviePoster movie={moviesInCinema[2]} /> */}
      <View style={{height: 440}}>
        <Carousel
          data={moviesInCinema}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
