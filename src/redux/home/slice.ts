import {createSlice} from '@reduxjs/toolkit';
import {
  HOME_DATA,
  MOVIE_BANNER,
  BUZZ_DATA,
  EVENT_LIST,
  BUY_CAROUSEL,
  EVENTS_POSTER,
  MAIN_BANNER,
  LAUGHTER_POSTER,
} from '../../mock/home';

const slice = createSlice({
  name: 'home',
  initialState: {
    menu: HOME_DATA,
    movieBanner: MOVIE_BANNER,
    eventsPoster: EVENTS_POSTER,
    mainBanner: MAIN_BANNER,
    laughterPoster: LAUGHTER_POSTER,
    buzzData: BUZZ_DATA,
    eventList: EVENT_LIST,
    buyData: BUY_CAROUSEL,
  },
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
