import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Home() {
    const users = useSelector((state) => state.users);
    console.log(users)
    return (
        <div className='container mt-5'>
            <h2>Crud App With JSON Server </h2>
            <Link to='/create' className='btn btn-success my-3'>Create + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-sm btn-primary' style={{ marginRight: '5px' }}>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
