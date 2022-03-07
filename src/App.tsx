import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './page/Home';
import './styles/global.css';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
