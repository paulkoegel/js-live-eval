import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

// enable hot module reloading (HMR) - cf. http://chrisshepherd.me/posts/adding-hot-module-reloading-to-create-react-app
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
