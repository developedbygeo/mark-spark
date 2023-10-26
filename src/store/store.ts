import { configureStore } from '@reduxjs/toolkit';

import { markdownSlice } from 'src/store/slices/markdownSlice';

const store = configureStore({
  reducer: {
    [markdownSlice.name]: markdownSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
