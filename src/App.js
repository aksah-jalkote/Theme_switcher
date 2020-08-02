import React, {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import HeroSecton from './Components/HeroSecton';

const App = () => {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSecton />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
