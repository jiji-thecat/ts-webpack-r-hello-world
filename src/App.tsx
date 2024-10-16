import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from './styles';

const App = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hello, world!</Text>
    <Button title="press me" onPress={() => {}} />
  </View>
);

export default App;
