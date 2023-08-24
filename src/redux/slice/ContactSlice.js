import { createSlice } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name:'ContactSlice',
    initialState:{
        data:[]
    },
    reducers:{
        createContact:(state,action)=>{
            const datas = [...state.data,action.payload]
            state.data=datas;
            console.log(state.data);
        },
        deleteContact:(state,action)=>{
            const id = action.payload;
            state.data = state.data.filter((item)=>{
                return item.id!==id;
            })
        } ,
        updateContact:(state,action)=>{
            const index = state.data.findIndex(item=>{
                return item.id===action.payload.id
            })
            const newData = {
                id:action.payload.id,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                isActive:action.payload.isActive
            }
         state.data[index] = newData
    }
    }
})

export default contactSlice.reducer;
export const {createContact,deleteContact,updateContact} = contactSlice.actions;