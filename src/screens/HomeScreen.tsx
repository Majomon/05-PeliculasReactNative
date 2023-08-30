import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
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
    <ScrollView>
      <View style={{marginTop: 20}}>
        {/* Carousel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={moviesInCinema}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* Peliculas populares */}
        <View style={{backgroundColor: 'red', height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
            data={moviesInCinema}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            //Para el scroll hacia el costado
            horizontal={true}
            //Ocultar la barra de scroll
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
