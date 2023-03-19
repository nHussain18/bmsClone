import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './navigation/tabNavigation';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
