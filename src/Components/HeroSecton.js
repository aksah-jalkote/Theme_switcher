import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const HeroSecton = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const theme = useContext(ThemeContext)[0];
  const curentTheme = AppTheme[theme];

  return (
      
    <div
      style={{
        padding: '1rem',
        backgroundColor: `${curentTheme.backgroundColor}`,
        color: `${curentTheme.textColor}`,
        textAlign: 'center',
      }}
    >
      <h1>Context API theme toggler</h1>
      <p></p>
      <button
        onClick={() => {
          setThemeMode(themeMode === 'light' ? 'dark' : 'light');
        }}
        style={{
          backgroundColor: '#26ae60',
          padding: '10px 150px',
          fontSize: '30px',
          color: '#FFF',
          border: `${curentTheme.border}`,
        }}
      >
        Click ME
      </button>
    </div>
  );
};

export default HeroSecton;
