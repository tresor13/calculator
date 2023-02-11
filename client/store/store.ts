import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { calculatorHistoryReducer } from "./slices/CalculatorHistorySlice";
import { useDispatch } from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: {
      history: calculatorHistoryReducer,
    },

    devTools: true,
  });

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const wrapper = createWrapper<RootStore>(makeStore);
