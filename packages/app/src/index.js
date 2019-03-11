import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';

import App from 'components/App';

function renderApp() {
  ReactDOM.render((
      <App />
    ),
    document.getElementById('root')
  );
}

// initial render
renderApp();
