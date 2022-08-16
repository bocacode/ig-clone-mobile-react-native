import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Hero(){
  return (
    <View style={styles.headerBar}>
      <Text style={styles.headerText}>
        IG Clone</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    height: 40,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default Hero;