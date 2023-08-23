import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// import { Basics } from 'Basics';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    red: 'orangered',
    green: 'green',
    orange: 'orange',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <Basics /> */}
    </ThemeProvider>
  </React.StrictMode>
);
