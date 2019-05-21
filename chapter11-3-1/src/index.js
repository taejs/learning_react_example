import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './components/App'
import storeFactory from './store'

import ReactDOM from 'react-dom';

const store = storeFactory()

window.React = React
window.store = store

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
