import React from 'react'

export default function Create() {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
<div className='w-50  border bg-secondary text-white p-3'>
        <form>
          <div>
            <label htmlFor='name'>Name :</label>
            <input type='text' name='name' className='form-control'></input>
          </div>
          <div>
            <label htmlFor='email'>Email :</label>
            <input type='email' name='name' className='form-control'></input>
          </div><br/>
          <button className='btn btn-info'>Submit</button>
        </form>

      </div>
      
    </div>
  )
}
