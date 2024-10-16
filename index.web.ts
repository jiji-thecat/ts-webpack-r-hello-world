import * as React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './src/App';
import Prac1 from './src/Prac1';
import Prac2 from './src/Prac2';
import Prac3 from './src/Prac3';
import Prac4 from './src/Prac4';
import Prac5 from './src/Prac5';

AppRegistry.registerComponent('App', () => Prac5);

AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
