
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedProperties: [],
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    saveProperty: (state, action) => {
      state.savedProperties.push(action.payload);
    },
    unsaveProperty: (state, action) => {
      state.savedProperties = state.savedProperties.filter(
        property => property.id !== action.payload.id
      );
    },
  },
});

export const { saveProperty, unsaveProperty } = propertySlice.actions;
export default propertySlice.reducer;
