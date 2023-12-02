import {createSlise} from '@reduxjs/toolkit'
import {UsersList} from './../DATA/Data'
const UsersSlise = createSlise({
    name:'users',
    initialState:UsersList,
    reducers:{

    }
})
export default UsersSlise.reducer;