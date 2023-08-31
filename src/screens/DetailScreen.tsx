import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;
const DetailScreen = ({route}: Props) => {
  /*   const movie = route.params as Movie;
  console.log(movie.title); */
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={styles.marginContainer}>
        <Icon name="star-outline" color="grey" size={20} />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,

    elevation: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
  },
});
