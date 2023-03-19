import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {COLORS} from '../../theme';
import {vs, ms} from '../../utils/scale';

interface WeeklyEventType {
  image: number;
  title: string;
  subTitle?: string;
  isSmall?: boolean;
  isUp?: boolean;
}

const WeeklyEvent = ({
  image,
  title,
  subTitle,
  isSmall,
  isUp,
}: WeeklyEventType) => {
  return (
    <ImageBackground
      blurRadius={ms(15)}
      source={image}
      style={[styles.imageViewStyle, isUp && styles.flexStart]}>
      <View
        style={[
          styles.imageTextContainer,
          (isSmall || isUp) && {padding: ms(10)},
        ]}>
        <Text
          style={[styles.mainText, (isSmall || isUp) && {fontSize: ms(15)}]}>
          {title}
        </Text>
        <Text style={[styles.subText, (isSmall || isUp) && styles.textStyle]}>
          {subTitle}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageViewStyle: {
    flex: 1,
    borderRadius: ms(10),
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    padding: ms(15),
  },
  mainText: {
    color: COLORS.white,
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  subText: {
    marginTop: vs(5),
    color: COLORS.white,
    fontWeight: 'bold',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: ms(10),
    marginTop: 0,
  },
});

export default WeeklyEvent;
