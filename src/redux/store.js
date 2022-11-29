import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './slices/Posts';

const reducer  = {
    posts : postsReducer
};

const store = configureStore({
    reducer : reducer,
    devTools : true
});

export default store;