import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';

const StackNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen
    }
}, { headerMode: 'none' });

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;