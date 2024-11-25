import { useState, useEffect, useCallback } from 'react';
import { AppRegistry } from 'react-native';

const map = [
  'App',
  'Prac1',
  'Prac2',
  'Prac3',
  'Prac4',
  'Prac5',
  'Prac6',
  'Prac7',
  'P8',
  'P9',
  'P10',
  'P11',
  'P12',
  'P13',
  'P14',
  'P15',
  // 'P16',
  // 'P17',
];

const CurrentComponent = ({ comp }: { comp: any }) => {
  const [App, setApp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const helper = async () => {
      // lazy loading
      const app = await import(`./src/${comp}`);
      setApp(() => app.default);
    };
    helper();
  }, [comp]);

  return App !== null ? <App /> : <></>;
};

const Root = () => {
  const [currentOption, setCurrentOption] = useState(map[map.length - 1]);

  const onChange = useCallback((e: any) => {
    setCurrentOption(e.target.value);
  }, []);

  return (
    <>
      <div className="body root">
        <select className="select" value={currentOption} onChange={onChange}>
          {map.map((v, i) => (
            <option value={v} key={i}>
              {v}
            </option>
          ))}
        </select>
        <CurrentComponent comp={currentOption} />
      </div>
      <style>
        {`
        .body.root {
          display: flex;
          justify-content: flex-start;
          height: 100vh;
          flex-direction: column;
          align-items: center;
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
