import { createSlice } from '@reduxjs/toolkit'

export interface CurrentSectionState {
  value: string
}
const initialState: CurrentSectionState = {
  value: "",
}
export const offerSlice = createSlice({
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
  onCurrentSection} = offerSlice.actions
export default offerSlice.reducer