import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EmployeeState {
  employeeInfos:
    | {
        company: string;
        data: string;
        duties: string[];
        id: string;
        order: number;
        title: string;
      }[]
    | [];
  currentEmployee: number;
}

const initialState: EmployeeState = {
  employeeInfos: [],
  currentEmployee: 3,
};

export const employeeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getEmployeeInfo: (state, { payload }) => {
      state.employeeInfos = payload;
    },
    changeEmployee: (state, { payload }) => {
      state.currentEmployee = payload;
    },
  },
});

export const { getEmployeeInfo, changeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
