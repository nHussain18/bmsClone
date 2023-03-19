import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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

export default Profile;
