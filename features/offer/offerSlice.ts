import { createSlice } from '@reduxjs/toolkit'

export interface OfferState {
  value: boolean
}
const initialState: OfferState = {
  value: false,
}
export const offerSlice = createSlice({
  name: 'Offer',
  initialState,
  reducers: {
    trueOffer: (state) => {
      state.value=true
    },
    falseOffer: (state) => {
      state.value =false
    },
  },
})
export const {trueOffer,falseOffer } = offerSlice.actions
export default offerSlice.reducer