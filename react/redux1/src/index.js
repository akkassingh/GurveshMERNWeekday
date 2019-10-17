import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './container/movies_list';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
    <MovieList />
    </Provider>, document.getElementById('root'));