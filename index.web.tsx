import { useState, useEffect, useCallback } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './src/App';
import Prac1 from './src/Prac1';
import Prac2 from './src/Prac2';
import Prac3 from './src/Prac3';
import Prac4 from './src/Prac4';
import Prac5 from './src/Prac5';
import Prac6 from './src/Prac6';
import Prac7 from './src/Prac7';
import P8 from './src/P8';
import P9 from './src/P9';

const map = new Map([
  [0, 'App'],
  [1, 'Prac1'],
]);

const CurrentComponent = () => {
  return <P8 />;
};

const Root = () => {
  const [options, setOptions] = useState();
  const [currentOption, setCurrentOption] = useState('P8');

  useEffect(() => {}, []);
  const onChange = useCallback((e: any) => {
    setCurrentOption('hoge');
  }, []);

  return (
    <>
      <div className="body">
        <select className="select" value={currentOption} onChange={onChange}>
          <option value="0">P8</option>
          <option value="1">P9</option>
        </select>
        <CurrentComponent />
      </div>
      <style>
        {`
        .body {
          display: flex;
          justify-content: center;
          height: 100vh;
        }
        .select {
          width: 300px;
          height: 30px;
        }
      `}
      </style>
    </>
  );
};

AppRegistry.registerComponent('App', () => Root);

AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
