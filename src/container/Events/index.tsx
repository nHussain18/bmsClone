import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Events = () => {
  return (
    <View style={styles.container}>
      <Text>Events Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Events;
