import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../interface/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const SliderHorizontal = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 240 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={190} />
        )}
        keyExtractor={item => item.id.toString()}
        //Para el scroll hacia el costado
        horizontal={true}
        //Ocultar la barra de scroll
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SliderHorizontal;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
});
