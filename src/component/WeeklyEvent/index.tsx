import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';
import ImageInText from '../ImageInText';

const WeeklyEvent = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>{'The Best Events This Week'}</Text>
        <Text style={styles.rowRightText}>
          {'Monday to Sunday, we got you coverd'}
        </Text>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.imageContainer}>
          <ImageInText
            image={require('../../assets/images/square/1.jpeg')}
            title={'PLAN FOR TODAY'}
            subTitle={'10+ EVENTS'}
          />
        </View>
        <View style={styles.imageContainer}>
          <ImageInText
            image={require('../../assets/images/square/2.jpeg')}
            title={'PLAN FOR TOMORROW'}
            subTitle={'10+ EVENTS'}
          />
        </View>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.imageContainer}>
          <ImageInText
            image={require('../../assets/images/square/3.jpeg')}
            title={'HEAD OUT THIS WEEKEND'}
            subTitle={'10+ EVENTS'}
          />
        </View>
        <View style={styles.imageContainer}>
          <ImageInText
            image={require('../../assets/images/square/2.jpeg')}
            title={'WEEKEND ONLINE EVENTS'}
            subTitle={'10+ EVENTS'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: s(15),
    marginTop: vs(40),
    marginBottom: vs(20),
  },
  rowLeftText: {
    fontWeight: 'bold',
    fontSize: ms(18),
    color: COLORS.secondary,
  },
  rowRightText: {
    fontSize: ms(15),
    color: COLORS.secondary,
  },
  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: s(10),
    gap: s(15),
  },
  imageContainer: {
    flex: 1,
    height: vs(150),
    marginBottom: s(15),
  },
});

export default WeeklyEvent;
