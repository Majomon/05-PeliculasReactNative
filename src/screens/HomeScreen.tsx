import React from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';
import MoviePoster from '../components/MoviePoster';
import SliderHorizontal from '../components/SliderHorizontal';
import {useMovies} from '../hooks/useMovies';
import {getPalette, type ImageColorsResult} from 'react-native-palette-picker';
import {getImageColors} from '../helpers/getColors';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {primary, secondary} = await getImageColors(uri);
    console.log(primary);
    console.log(secondary);
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: 20}}>
          {/* Carousel principal */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <SliderHorizontal title="Populares" movies={popular} />
          <SliderHorizontal title="Más valorados" movies={topRated} />
          <SliderHorizontal title="Próximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
