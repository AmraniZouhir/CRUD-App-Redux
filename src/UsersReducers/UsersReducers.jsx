import {createSlice} from '@reduxjs/toolkit'
import {UsersList} from './../DATA/Data'
const UsersSlise = createSlice({
    name:'users',
    initialState:UsersList,
    reducers:{
        addUsers:(state,action)=>{
            state.push(action.payload)
        },
        apdateUsers:(state,action)=>{
            const {id,name ,email} =action.payload;
            const uu =state.find(user=>user.id == id);
            if(uu){
                uu.name=name;
                uu.email=email;
            }
        },
        delateUsers : (state,action)=>{
            const {id} =action.payload;
            const uu =state.find(user=>user.id == id);
            if(uu){
              return state.filter(f=>f.id !== id)
            }
        }
    }
})
export const {addUsers,apdateUsers , delateUsers} = UsersSlise.actions;
export default UsersSlise.reducer;