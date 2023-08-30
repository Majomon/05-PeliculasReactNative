import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import SliderHorizontal from '../components/SliderHorizontal';
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
    <ScrollView>
      <View style={{marginTop: 20}}>
        {/* Carousel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={moviesInCinema}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <SliderHorizontal title="Populares" movies={moviesInCinema} />
        <SliderHorizontal title="Populares" movies={moviesInCinema} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
