import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    photos: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photos = action.payload.photos;

        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photos = null;
        }
    }
})

export const { setUserLogin, setSignOut} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;