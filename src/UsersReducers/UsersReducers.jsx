import {createSlice} from '@reduxjs/toolkit'
import {UsersList} from './../DATA/Data'
const UsersSlise = createSlice({
    name:'users',
    initialState:UsersList,
    reducers:{

    }
})
export default UsersSlise.reducer;