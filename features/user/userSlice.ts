import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  value: boolean
}
const initialState: UserState = {
  value: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    trueUser: (state) => {
      state.value=true
    },
    falseUser: (state) => {
      state.value =false
    },
  },
})
export const {trueUser,falseUser } = userSlice.actions
export default userSlice.reducer