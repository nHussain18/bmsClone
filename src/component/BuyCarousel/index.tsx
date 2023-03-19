import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '..';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';

type DataType = {
  title: string;
  image: number;
  description: string;
  subTitle: string;
  language: string;
  isPremiere?: boolean;
  isExclusive?: boolean;
};

const renderItem = ({item}: {item: DataType}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <ImageBackground
            source={item.image}
            style={styles.posters}
            resizeMode={'cover'}>
            {item.isPremiere && (
              <View style={styles.posterText}>
                <Text style={styles.lapText}>PREMIERE</Text>
              </View>
            )}
            {item.isExclusive && (
              <View
                style={[styles.posterText, {backgroundColor: COLORS.yellow}]}>
                <Text style={[styles.lapText, {color: COLORS.black}]}>
                  EXCLUSIVE
                </Text>
              </View>
            )}
          </ImageBackground>
        </View>
        <View style={styles.column}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subTitleText}>{item.subTitle}</Text>
          <Text style={styles.languageText}>{item.language}</Text>
          <Text style={styles.descriptionText} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
      </View>
      <Button title={'Buy or Rent'} style={{marginTop: vs(15)}} />
    </View>
  );
};

const BuyCarousel = () => {
  const {buyData} = useSelector(state => state.homeReducer);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={buyData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vs(50),
    backgroundColor: COLORS.secondary,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    gap: ms(15),
  },
  container: {
    width: Dimensions.get('window').width,
    padding: ms(15),
  },
  posters: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  posterText: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary,
    paddingHorizontal: s(5),
  },
  lapText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: ms(18),
  },
  column: {
    flex: 1,
    height: vs(250),
  },
  titleText: {
    color: COLORS.white,
    fontSize: ms(20),
    fontWeight: 'bold',
  },
  subTitleText: {
    color: COLORS.white,
    marginTop: vs(5),
  },
  languageText: {
    color: COLORS.white,
    marginTop: vs(5),
  },
  descriptionText: {
    color: COLORS.white,
    marginTop: vs(10),
  },
});

export default BuyCarousel;
