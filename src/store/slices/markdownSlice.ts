import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { preprocessHtml } from 'src/lib/data';

import { InitialMarkdownState } from 'src/types/store';

const initialState: InitialMarkdownState = {
  markdown: null,
  preview: null,
  parsedHtml: null,
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
    setParsed: (state, action: PayloadAction<string>) => {
      state.parsedHtml = action.payload;
    },
    resetMarkdown: (state) => {
      state.markdown = null;
    },
    resetHtml: (state) => {
      state.preview = null;
    },
  },
});

export const { setMarkdown, setPreview, setParsed, resetMarkdown, resetHtml } = markdownSlice.actions;

export default markdownSlice.reducer;
