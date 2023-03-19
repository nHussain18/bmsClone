import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme';
import {ms, s, vs} from '../../utils/scale';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>It All Starts Here</Text>
      <Text style={styles.subHeaderTxt}>Jaipur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vs(68),
    backgroundColor: COLORS.secondary,
    paddingHorizontal: s(15),
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: ms(25),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subHeaderTxt: {
    color: COLORS.white,
  },
});

export default Header;
