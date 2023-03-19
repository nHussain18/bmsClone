import React from 'react';
import {StyleSheet, FlatList, Text, View, ImageBackground} from 'react-native';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';

type DataType = {
  title: string;
  image: number;
  lapText: string;
  description?: string;
  subTitle: string;
  isPromoted?: boolean;
  isOnline?: boolean;
};

type DataListType = DataType[];

interface PosterCarouselType {
  data: DataListType;
  label: string;
  isSeeAll?: boolean;
}

const PosterCarousel = ({data, label, isSeeAll}: PosterCarouselType) => {
  const renderItem = ({item}: {item: DataType}) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={item.image}
          style={styles.posters}
          resizeMode={'cover'}>
          <View style={styles.topRow}>
            {item?.isOnline ? (
              <View style={styles.onlineBG}>
                <Text style={styles.onlineText}>ONLINE</Text>
              </View>
            ) : (
              <View />
            )}
            {item?.isPromoted ? (
              <View style={styles.promotedBG}>
                <Text style={styles.promotedText}>PROMOTED</Text>
              </View>
            ) : (
              <View />
            )}
          </View>
          <View style={styles.posterText}>
            <Text numberOfLines={1} style={styles.lapText}>
              {item.lapText}
            </Text>
          </View>
        </ImageBackground>
        <Text numberOfLines={2} style={styles.titleText}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          {item.subTitle}
        </Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          {item.description}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>{label}</Text>
        {isSeeAll && <Text style={styles.rowRightText}>See All</Text>}
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
    width: s(120),
    marginRight: ms(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: COLORS.primary,
  },
  mainContainer: {
    paddingHorizontal: s(15),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: s(5),
  },
  posters: {
    height: vs(200),
    justifyContent: 'space-between',
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  posterText: {
    backgroundColor: COLORS.black,
    paddingVertical: vs(10),
    paddingLeft: s(10),
    justifyContent: 'center',
  },
  onlineBG: {
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    backgroundColor: COLORS.black,
    borderRadius: ms(2),
  },
  onlineText: {
    fontSize: ms(10),
    color: COLORS.white,
  },
  promotedBG: {
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    backgroundColor: COLORS.primary,
    borderRadius: ms(2),
  },
  promotedText: {
    fontSize: ms(10),
    color: COLORS.white,
  },
  titleText: {
    fontSize: ms(15),
    color: COLORS.black,
    marginTop: vs(5),
  },
  descriptionText: {
    fontSize: ms(13),
    color: COLORS.black,
    opacity: 0.5,
  },
  lapText: {
    color: COLORS.white,
    fontSize: ms(11),
  },
});

export default PosterCarousel;
