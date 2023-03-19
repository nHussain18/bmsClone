import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';
import ImageInText from '../ImageInText';

const EventList = () => {
  const {eventList} = useSelector(state => state.homeReducer);

  const renderItem = ({item, index, data}) => {
    let firstItem = index === 0 ? item : data[index + 1];
    let secondItem = index === 0 ? data[1] : data[index + 2];
    if (index <= data.length / 2 - 1) {
      return (
        <View>
          <View style={[styles.imageContainer, {marginBottom: vs(10)}]}>
            <ImageInText
              image={firstItem.image}
              title={firstItem.title}
              subTitle={firstItem.subTitle}
              isSmall
            />
          </View>
          <View style={styles.imageContainer}>
            <ImageInText
              image={secondItem.image}
              title={secondItem.title}
              subTitle={secondItem.subTitle}
              isSmall
            />
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>{'The Ultimate Events List'}</Text>
        <Text style={styles.rowRightText}>
          {'Good times outdoor or at home'}
        </Text>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={{paddingHorizontal: s(15), gap: s(15)}}
        data={eventList}
        renderItem={({item, index}) =>
          renderItem({item, index, data: eventList})
        }
        keyExtractor={(_, index) => index.toString()}
      />
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
  imageContainer: {
    width: s(120),
    height: vs(120),
  },
});

export default EventList;
