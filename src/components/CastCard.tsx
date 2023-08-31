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
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    marginLeft: 20,
    marginRight: 10,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actorInfo: {
    marginLeft: 10,
  },
  actorName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actorCharacter: {
    color: 'black',
    fontSize: 14,
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
