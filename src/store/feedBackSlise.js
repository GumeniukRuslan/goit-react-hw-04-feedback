const { createSlice } = require('@reduxjs/toolkit');

const feedBackSlice = createSlice({
  name: 'feedBack',
  initialState: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
  reducers: {
    increment(state, action) {
      state[action.payload] += 1;
    },
  },
});

export const { increment } = feedBackSlice.actions;
export const feedBackReducer = feedBackSlice.reducer;
