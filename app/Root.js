/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screens
import Home from './screens/onboarding/Home';
import Question1 from './screens/questions/Question1';
import Question2 from './screens/questions/Question2';
import Question3 from './screens/questions/Question3';
import Failed from './screens/result/Failed';
import Passed from './screens/result/Passed';

const Root = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Question1: {
      screen: Question1,
    },
    Question2: {
      screen: Question2,
    },
    Question3: {
      screen: Question3,
    },
    Failed: {
      screen: Failed,
    },
    Passed: {
      screen: Passed,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
export default createAppContainer(Root);
