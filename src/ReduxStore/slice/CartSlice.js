import { createSlice} from "@reduxjs/toolkit";
import Data from "./Data"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProperties: [],
        totalBooking: 0,
        totalCost: 0
    },

    reducers: {
        addCart: (state, action) => {
            const propertExists = state.cartProperties.find((item) => {
                return item.id === action.payload;
            });

            if (propertExists) {
                propertExists.quantity++;
                propertExists.totalPrice = propertExists.price*propertExists.quantity;
            }
            else {
                const filterdProperties = Data.filter((item) => {
                    return item.id === action.payload;
                })

                if (filterdProperties.length > 0) {
                    let totalPrice = filterdProperties[0].price;
                    let newProperty = {
                        ...filterdProperties[0],
                        bookedAt: new Date().toISOString(),
                        quantity: 1,
                        totalPrice : totalPrice
                    };
                    state.cartProperties = ([...state.cartProperties, newProperty])
                }
            }
            
            state.totalBooking = state.cartProperties.length;
            state.totalCost = state.cartProperties.reduce((sum,item) => {
                return sum + item.price*item.quantity;
            },0);
        },

        removeProperty: (state, action) => {
            const filterdPropertiesAfterRemove = state.cartProperties.filter((item) => {
                return item.id !== action.payload;
            })
            state.cartProperties = [...filterdPropertiesAfterRemove];
            state.totalBooking = state.cartProperties.length;
            state.totalCost = state.cartProperties.reduce((sum,item) => {
                return sum + item.price*item.quantity;
            },0);
        },

        incrementPropertyQuantity: (state, action) => {
            const property = state.cartProperties.find((item) => item.id === action.payload);
            if (property) {
                property.quantity++;
                property.totalPrice = property.price*property.quantity;
            }
            state.totalCost = state.cartProperties.reduce((sum,item) => {
                return sum + item.price*item.quantity;
            },0);

            
        },
        decrementPropertyQuantity: (state, action) => {
            const property = state.cartProperties.find((item) => item.id === action.payload);
            if (property && property.quantity > 1) {
                property.quantity--;
                property.totalPrice = property.price*property.quantity;

            }
            else {
                state.cartProperties = state.cartProperties.filter((item) => {
                    return item.id !== action.payload;
                })
                state.totalBooking = state.cartProperties.length;
            }
            state.totalCost = state.cartProperties.reduce((sum,item) => {
                return sum + item.price*item.quantity;
            },0);
        }
    }
})

export const { addCart, removeProperty, incrementPropertyQuantity, decrementPropertyQuantity } = cartSlice.actions;
export default cartSlice;
