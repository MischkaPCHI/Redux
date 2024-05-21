import { createAppSlice } from "store/createAppSlice";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RandomActivitySliceState } from "./types";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const randomActivityInitialState: RandomActivitySliceState = {
  data: [],
  status: "default",
  error: undefined,
};

export const randomActivitySlice = createAppSlice({
  name: "RANDOMACTIVITY",
  initialState: randomActivityInitialState,
  reducers: (create) => ({
    getActivity: create.asyncThunk(
      async (arg, thunkApi) => {
        const response = await fetch("https://www.boredapi.com/api/activity");
        const result = await response.json();

        if (!response.ok) {
          return thunkApi.rejectWithValue(result);
        } else {
          return result;
        }
      },
      {
        pending: (state: RandomActivitySliceState) => {
          state.status = "loading";
          state.error = undefined;
        },
        fulfilled: (state: RandomActivitySliceState, action: any) => {
          state.status = "success";
          state.data = [
            ...state.data,
            {
              id: v4(),
              question: action.payload?.activity,
            },
          ];
        },
        rejected: (state: RandomActivitySliceState, action: any) => {
          state.status = "error";
          state.error = action.payload;
          
          alert("Network error");
        },
      }
    ),
    deleteAll: create.reducer(() => randomActivityInitialState),
    deleteThisActivity: create.reducer((state: RandomActivitySliceState, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter((activity) => activity.id !== action.payload.id);
    }),
  }),
  selectors: {
    activity: (state) => state,
  },
});

export const randomActivitySliceActions = randomActivitySlice.actions;
export const randomActivitySliceSelectors = randomActivitySlice.selectors;
