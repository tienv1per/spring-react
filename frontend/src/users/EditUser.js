import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const navigate = useNavigate();
    const {id} = useParams();

    const {name, username, email} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className='adduser'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Update User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Name</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter name'
                                name='name'
                                required
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>Username</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter user name'
                                name='username'
                                required
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter email address'
                                name='email'
                                required
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser