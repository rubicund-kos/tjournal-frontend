import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ResponseAuthUser} from "../../utils/api/types";
import {AppState} from "../store";


export interface UserState {
    data: ResponseAuthUser | null;
}

const initialState: UserState = {
    data: null,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUserData: (state, action: PayloadAction<ResponseAuthUser>) => {
            state.data = action.payload;
        }
    }
})

export const selectUserData = (state: AppState) => state.user.data

export const { setUserData } = userSlice.actions


export const userReducer = userSlice.reducer;