import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

function PhotoCard({ photo }){
  return (
    <View>
      <Text>{photo.description}</Text>
    </View>
  )
}

export default PhotoCard;