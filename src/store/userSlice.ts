import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
  user: User | null;
}

export interface User {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_data: string;
  city: string;
}

const initialState: UserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {changeUser} = userSlice.actions

export default userSlice.reducer;
