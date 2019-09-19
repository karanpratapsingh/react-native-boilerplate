import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation/App.Navigator';
import Store from './app/store/Store';

const App = () => (
    <Provider store={Store}>
        <AppNavigator />
    </Provider>
);

export default App;
