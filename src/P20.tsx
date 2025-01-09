import React, { useCallback, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
};

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        height: '100vh',
        transition: '0.3s ease-in',
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
