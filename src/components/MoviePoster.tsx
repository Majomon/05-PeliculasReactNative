import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Movie} from '../interface/movieInterface';

interface Props {
  movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width: 300, height: 420}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 100,
      height: 300,
    },
    shadowOpacity: 1,
    shadowRadius: 15,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
