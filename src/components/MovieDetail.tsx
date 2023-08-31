import React from 'react';
import currencyFormatter from 'currency-formatter';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interface/creditsInterface';
import {MovieFull} from '../interface/movieInterface';
import CastCard from './CastCard';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
const MovieDetail = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        {/* Detalles */}
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={styles.vote}>{movieFull.vote_average}</Text>
          <Text style={styles.genre}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.presupuesto}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 30, height: 120}}>
        <Text style={styles.titleActores}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastCard actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.styleFlatList}
        />
      </View>
    </>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  vote: {
    color: 'black',
    marginLeft: 5,
  },
  genre: {
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    marginLeft: 2,
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  overview: {
    color: 'black',
    fontSize: 15,
  },
  presupuesto: {
    color: 'black',
    fontSize: 15,
  },
  titleActores: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  styleFlatList: {
    marginTop: 10,
  },
});
