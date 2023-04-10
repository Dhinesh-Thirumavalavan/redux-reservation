import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CustomerType {
  value: Customer[];
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}
const initialState: CustomerType = {
  value: [],
};
export const CustomerSlice = createSlice({
  name: "Customer",
  initialState,
  reducers: {
    addCustomerslice: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
        state,
        action: PayloadAction<AddFoodToCustomerPayload>
      ) => {
        state.value.forEach((customer) => {
          if (customer.id === action.payload.id) {
            customer.food.push(action.payload.food);
          }
        });
      },
    },
  });
export const { addCustomerslice,addFoodToCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
