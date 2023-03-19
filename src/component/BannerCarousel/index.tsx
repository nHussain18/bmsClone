import React from 'react';
import {StyleSheet, Image, FlatList, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {vs} from '../../utils/scale';

const Home = () => {
  const {mainBanner} = useSelector(state => state.homeReducer);

  const renderItem = ({item}) => {
    return <Image source={item.image} style={styles.menuLogo} />;
  };
  return (
    <FlatList
      horizontal
      data={mainBanner}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  menuLogo: {
    height: vs(210),
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
  menuText: {
    fontWeight: 'bold',
    marginTop: vs(10),
    textAlign: 'center',
  },
});

export default Home;
