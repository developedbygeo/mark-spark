import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { preprocessHtml } from 'src/lib/data';

import { InitialMarkdownState } from 'src/types/store';

const initialState: InitialMarkdownState = {
  markdown: null,
  preview: null,
};

export const markdownSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMarkdown: (state, action: PayloadAction<string>) => {
      state.markdown = action.payload;
      state.preview = preprocessHtml(action.payload);
    },
    setPreview: (state, action: PayloadAction<string>) => {
      state.preview = action.payload;
    },
    resetMarkdown: (state) => {
      state.markdown = null;
    },
    resetHtml: (state) => {
      state.preview = null;
    },
  },
});

export const { setMarkdown, setPreview, resetMarkdown, resetHtml } = markdownSlice.actions;

export default markdownSlice.reducer;
