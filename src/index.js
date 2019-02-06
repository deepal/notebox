/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import WebFont from 'webfontloader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
require('./favicon.ico');
 // Tell webpack to load favicon.ico
const store = configureStore();

// Load fonts
WebFont.load({
    google: {
      families: ['Ubuntu:300,400,500,700', 'sans-serif']
    }
});

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
