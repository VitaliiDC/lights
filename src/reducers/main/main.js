import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const mainReducer = createSlice({
    name: 'main',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        setListItem(state, action) {
            let arr = [...state.list];
            arr[action.payload.index] = action.payload.value;
            console.log(action)
            state.list = arr;
        },
        getList(state, action) {
            state.list = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        }
    }
});

export const getListThunk = () => async dispatch => {
    try{
        dispatch(setLoading(true));
        const res = await api.getList();
        dispatch(getList(res.list));
        dispatch(setLoading(false));
    }
    catch(err) {
        throw err;
    }
}

export const setListThunk = ({index, value, list}) => async dispatch => {

    let preList = [...list];
    preList[index] = value;

    try{
        dispatch(setLoading(true));
        await api.setList({preList});
        dispatch(setListItem({index, value}));
        dispatch(setLoading(false));
    }
    catch(err){
        throw err;
    }
}

export const {setListItem, getList, setLoading} = mainReducer.actions;

export default mainReducer.reducer;