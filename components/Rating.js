import React from 'react';
import { View, Text, Image } from 'react-native';

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i < rating; i++) {
    stars.push(
      <Image
        key={i}
        style={{ width: 30, height: 30 }}
        source={require('../assets/full-star.png')}
      />
    );
  }
  for (let i = rating; i < 5; i++) {
    stars.push(
      <Image
        key={i}
        style={{ width: 30, height: 30 }}
        source={require('../assets/empty-star.png')}
      />
    );
  }

  return (
    <View style={{ flexDirection: 'row', marginTop: 10, alignItems:"center" }}>
      {stars}
      <Text style={{ marginLeft: 8, fontSize: 15, fontWeight: "bold" }}>{rating}</Text>
    </View>
  );
};

export default Rating;
