import {createSlice,PayloadAction} from '@reduxjs/toolkit'
interface ReservationType{
    value:string[]
}
const initialState:ReservationType={
    value:['']
}
export const ReservationSlice=createSlice(
    {
        name:'Reservation',
        initialState,
        reducers:{
            reservationslice:(state,action:PayloadAction<string>)=>{
state.value.push(action.payload);
            },
            reservationsliceremove:(state,action:PayloadAction<number>)=>{
                state.value.splice(action.payload,1)
        }
        },
   
}
)
export const {reservationslice,reservationsliceremove} =ReservationSlice.actions
export default ReservationSlice.reducer