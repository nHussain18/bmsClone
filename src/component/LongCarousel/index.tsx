import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';

type DataType = {
  image: number;
  description?: string;
};

type DataListType = DataType[];

interface PosterCarouselType {
  data: DataListType;
  label: string;
  subTitle: string;
}

const LongCarousel = ({data, label, subTitle}: PosterCarouselType) => {
  const renderItem = ({item}: {item: DataType}) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.image}
          style={styles.posters}
          resizeMode={'cover'}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={5} style={styles.descriptionText}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>{label}</Text>
        <Text style={styles.rowRightText}>{subTitle}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={styles.mainContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.3,
    flexDirection: 'row',
    marginRight: ms(10),
    backgroundColor: COLORS.secondary,
    padding: ms(15),
    borderRadius: ms(10),
  },
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
  mainContainer: {
    paddingHorizontal: s(15),
  },
  posters: {
    width: ms(100),
    height: ms(100),
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  descriptionText: {
    fontSize: ms(15),
    color: COLORS.white,
  },
  textContainer: {
    flex: 1,
    marginLeft: s(15),
  },
});

export default LongCarousel;
