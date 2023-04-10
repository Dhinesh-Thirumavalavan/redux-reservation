import React, { useState } from "react";
import "./App.css";
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from "./Redux/store";
import Reservationcard from "./components/Reservationcard";
import {reservationslice} from './Redux/Features/ReservationSlice'
import {CustomerSlice} from './Redux/Features/CustomerSlice'
import CustomerCard from "./components/CustomerCard";
function App() {

  const [resname,setresname]=useState('')

  const reservations=useSelector((state:RootState)=>state.reservations.value)
  const Customers=useSelector((state:RootState)=>state.customer.value)
  const dispatch=useDispatch()
  const handlereservationname=()=>{
    if(!resname) return;
dispatch(reservationslice(resname));
setresname('')
  };


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
             {reservations.map((name,index)=>{
return <Reservationcard name={name} index={index}/>
             })}
          </div>
          </div>
          <div className="reservation-input-container">
            <input value={resname}  onChange={(e)=>setresname(e.target.value)} />
            <button  onClick={handlereservationname}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        {Customers.map((customer)=>{
          return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>
        })}
        </div>
      </div>
    </div>
    
  );
}

export default App;
