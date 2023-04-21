import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TourType = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

export interface toursState {
  tours: TourType[];
}

const initialState: toursState | [] = {
  tours: [],
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    storeTours: (state, { payload }) => {
      state.tours = payload;
    },
    removeTours: (state) => {
      state.tours = [];
    },
    deleteTours: (state, { payload }) => {
      state.tours = state.tours.filter((tour) => tour.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeTours, removeTours, deleteTours } = tourSlice.actions;

export default tourSlice.reducer;
