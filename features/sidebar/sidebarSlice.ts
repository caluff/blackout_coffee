import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  value: boolean
}
const initialState: SidebarState = {
  value: false,
}
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    trueSidebar: (state) => {
      state.value=true
    },
    falseSidebar: (state) => {
      state.value =false
    },
  },
})
export const {trueSidebar,falseSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer