import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Header,
  MainMenu,
  BannerCarousel,
  PosterCarousel,
  LongCarousel,
  WeeklyEvent,
  EventList,
  BuyCarousel,
} from '../../component';
import {COLORS} from '../../theme';
import {vs} from '../../utils/scale';

const Home = () => {
  const {movieBanner, buzzData, eventsPoster, laughterPoster} = useSelector(
    state => state.homeReducer,
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.innerContainer}>
        <Header />
        <ScrollView contentContainerStyle={{paddingBottom: vs(50)}}>
          <MainMenu />
          <BannerCarousel />
          <PosterCarousel
            data={movieBanner}
            label={'Recommended Movie'}
            isSeeAll
          />
          <WeeklyEvent />
          <PosterCarousel
            data={eventsPoster}
            label={'Events Happening Near You'}
          />
          <EventList />
          <BuyCarousel />
          <PosterCarousel 
            data={movieBanner}
            label={'Live Events'}
            isSeeAll
          />
          <PosterCarousel
            data={laughterPoster}
            label={'Laughter Therapy'}
            isSeeAll
          />
          <PosterCarousel
            data={movieBanner}
            label={'Popular Events'}
            isSeeAll
          />
          <PosterCarousel
            data={movieBanner}
            label={'The Games & Sport Events'}
            isSeeAll
          />
          <PosterCarousel
            data={movieBanner}
            label={'Explore Fun Activities'}
            isSeeAll
          />
          <PosterCarousel
            data={movieBanner}
            label={'Online Streaming Events'}
            isSeeAll
          />
          <LongCarousel
            data={buzzData}
            label={'Buzz'}
            subTitle={'Discover the latest in Entertainment'}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
