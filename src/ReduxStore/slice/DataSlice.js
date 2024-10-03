import { createSlice } from "@reduxjs/toolkit";
import properties from "./Data";
const initialState = {
    propertiesDetails: [],
    loading: false,
    error: null
}


const DataSlice = createSlice({
    name: "properties-data",
    initialState,
    reducers: {
        addProperties: (state, action) => {
            state.propertiesDetails = properties;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
});
export const { addProperties, setLoading, setError } = DataSlice.actions;
export default DataSlice;