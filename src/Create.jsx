import React, { useState } from 'react'
import { addUsers } from './UsersReducers/UsersReducers'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Create() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);
  const navigator =useNavigate()



  const handeleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addUsers({id:users[users.length -1].id +1 , name , email}))
    navigator('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50  border bg-secondary text-white p-3'>
        <h3>Add New User</h3>
        <form onSubmit={handeleSubmit}>
          <div>
            <label htmlFor='name'>Name :</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' onChange={e=>setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email :</label>
            <input type='email' name='name' className='form-control' placeholder='Enter Email' onChange={e=>setEmail(e.target.value)}/>
          </div><br />
          <button className='btn btn-info'>Submit</button>
        </form>

      </div>

    </div>
  )
}
