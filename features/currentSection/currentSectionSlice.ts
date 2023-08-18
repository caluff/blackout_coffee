import { createSlice } from '@reduxjs/toolkit'

export interface CurrentSectionState {
  value: string
}
const initialState: CurrentSectionState = {
  value: "",
}
export const currentSectionSlice = createSlice({
  name: 'CurrentSection',
  initialState,
  reducers: {
    setCurrentSection: (state,action) => {
      state.value= action.payload.value
    },
    onCurrentSection: (state) => {
      state.value =""
    },
  },
})
export const {
  setCurrentSection,
  onCurrentSection} = currentSectionSlice.actions
export default currentSectionSlice.reducer