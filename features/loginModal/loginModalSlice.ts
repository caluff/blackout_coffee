import { createSlice } from '@reduxjs/toolkit'

export interface LoginModalState {
  value: boolean
}
const initialState: LoginModalState = {
  value: false,
}
export const loginModalSlice = createSlice({
  name: 'LoginModal',
  initialState,
  reducers: {
    trueLoginModal: (state) => {
      state.value= true
    },
    falseLoginModal: (state) => {
      state.value =false
    },
  },
})
export const {
  trueLoginModal,
  falseLoginModal} = loginModalSlice.actions
export default loginModalSlice.reducer