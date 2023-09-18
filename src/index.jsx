import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);


const product = []

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'addProduct': {
            return [...state, action.payload]
        }
        case 'removeProduct': {
            return state.filter(p => p.id !== action.payload.id)
        }
        case 'editProduct': {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, name: action.payload.name, number: action.payload.number } : item
              );
        }
        default: {
            return state
        }
    }
}

const store = createStore(reducer, product)

root.render(
    <Provider store={store}><App /></Provider>
)