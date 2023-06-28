import React from 'react'

const Navbar = () => {
	return (
		<div className='navBar'>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Fullstack Application</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<button className='btn btn-outline-light'>Add User</button>
				</div>
			</nav>
		</div>
	)
}

export default Navbar