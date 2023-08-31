import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interface/creditsInterface';

interface Props {
  actor: Cast;
}

const CastCard = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.image} />
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,

    elevation: 10,
  },
  actorInfo: {
    marginLeft: 10,
  },
  actorName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    color: 'black',
    fontSize: 16,
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
