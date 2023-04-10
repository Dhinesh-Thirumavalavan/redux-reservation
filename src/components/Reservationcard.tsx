import React from 'react'
import {useDispatch} from 'react-redux'
import { reservationsliceremove } from '../Redux/Features/ReservationSlice'
import {addCustomerslice } from '../Redux/Features/CustomerSlice'
import {v4 as uuid} from 'uuid'

interface ReservationCardTypes{
name:string,
index:number
}

const Reservationcard = ({name,index}:ReservationCardTypes) => {
    const dispatch=useDispatch()
  return (
    <div onClick={()=>{
        dispatch(reservationsliceremove(index))
    dispatch(addCustomerslice({
        id:uuid(),
        name,
        food:[]
    }))
}} 
    className="reservation-card-container">
        {name}
    </div>
 
  )
}

export default Reservationcard
