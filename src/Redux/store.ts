import {configureStore} from '@reduxjs/toolkit'
import reservationReducer from '../Redux/Features/ReservationSlice'
import customerReducer from '../Redux/Features/CustomerSlice'
export const store=configureStore({
    reducer:{
reservations:reservationReducer,
customer:customerReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;