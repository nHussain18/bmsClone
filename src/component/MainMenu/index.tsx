import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../theme';
import {s, vs, ms} from '../../utils/scale';

const Home = () => {
  const {menu} = useSelector(state => state.homeReducer);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {menu.map((item, index) => {
        return (
          <View key={index.toString()} style={styles.mainItem}>
            <Image
              source={item.image}
              style={styles.menuLogo}
              resizeMode={'contain'}
            />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    width: s(80),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(10),
  },
  menuLogo: {
    width: ms(35),
    height: ms(35),
  },
  menuText: {
    fontWeight: 'bold',
    marginTop: vs(10),
    textAlign: 'center',
    color: COLORS.black,
  },
});

export default Home;
