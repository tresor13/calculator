import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CalculatorHistoryState } from "../types";
import { HYDRATE } from "next-redux-wrapper";

import { useApi } from "../hooks";

const api = useApi();

const fetchHistory = createAsyncThunk("history/get", api.fetchHistory);
const deleteHistoryItem = createAsyncThunk(
  "history/delete",
  api.deleteHistoryItem
);
const calculateExpression = createAsyncThunk(
  "calculator/get",
  api.calculateExpression
);

const maxNumberOfHistoryItems = 10;

const initialState: CalculatorHistoryState = {
  history: [],
  inputValue: "0",
  fetchError: null,
  status: "idle",
};

const calculatorHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addItemToState(state, action) {
      const updatedHistory = [action.payload, ...state.history];
      if (updatedHistory.length < maxNumberOfHistoryItems) {
        return { ...state, history: updatedHistory };
      }
      return {
        ...state,
        history: updatedHistory.slice(0, maxNumberOfHistoryItems),
      };
    },

    removeFromState(state, action) {
      const filteredHistory = state.history.filter((item) => {
        return item._id != action.payload;
      });
      return { ...state, history: filteredHistory };
    },

    setItemToInput(state, action) {
      return { ...state, inputValue: action.payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, _action) => {
      return {
        ...state,
        // ...action.payload.subject,
      };
    });

    builder.addCase(fetchHistory.fulfilled, (state, { payload }) => {
      state.history = [...payload];
      state.status = "idle";
    });

    builder.addCase(calculateExpression.fulfilled, (state, _action) => {
      return state;
    });

    builder.addCase(deleteHistoryItem.fulfilled, (state, action) => {
      state.history.filter((item) => item._id != action.payload);
    });

    builder.addCase(deleteHistoryItem.rejected, (state, action) => {
      console.log(action);
      return state;
    });
  },
});

export const { actions } = calculatorHistorySlice;
export const asyncActions = {
  fetchHistory,
  calculateExpression,
  deleteHistoryItem,
};
export const calculatorHistoryReducer = calculatorHistorySlice.reducer;
