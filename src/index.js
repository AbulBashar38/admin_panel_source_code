import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { styled, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
        darker: '#053e85',

      },
    },
  });
// import registerServiceWorker from './registerServiceWorker';
// http://localhost:8000/api/
ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Provider store={configureStore()}>
        <App />
    </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
