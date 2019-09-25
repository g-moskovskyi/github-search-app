import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history';

import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';

const customHistory = createBrowserHistory();
const store = createStore(customHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={customHistory}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
