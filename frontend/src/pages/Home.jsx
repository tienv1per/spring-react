import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		loadUsers();
	}, [users]);

	const loadUsers = async () => {
		const result = await axios.get("http://localhost:8080/users");
		setUsers(result.data);
	}

	const deleteUser = async (id) => {
		await axios.delete(`http://localhost:8080/user/${id}`);
		loadUsers();
	}

	return (
		<div className='container'>
			<div className='py-4'>
				<table className="table border shadow">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Username</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr key={index}>
									<th scope="row">{index+1}</th>
									<td>{user.username}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										<Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
										<Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
										<button 
											className='btn btn-danger mx-2'
											onClick={(() => deleteUser(user.id))}
										>
											Delete
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home