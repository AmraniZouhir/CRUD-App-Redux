import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className='container'>
        <h2>Crud App With JSON Server </h2>
        <button className='btn btn-success my-3'>Create + </button>
        <table className='table'>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
