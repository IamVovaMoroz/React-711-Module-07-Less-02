import { NavLink, Navigate, useNavigate } from 'react-router-dom'

const Header = ({ open }) => {
	// запускается  useNavigate("/login") и происходит переход на это место
	const navigate = useNavigate()
	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div className='navbar-nav'>
					<NavLink
						className='nav-link text-white'
						aria-current='page'
						to='/'
					>
						Home
					</NavLink>
					<NavLink className='nav-link text-white' to='/news'>
						News
					</NavLink>
					<NavLink className='nav-link text-white' to='/todo'>
						Todo
					</NavLink>
					<NavLink className='nav-link text-white' to='/products'>
						Products
					</NavLink>
				</div>
				<button className='btn btn-outline-success' onClick={open}>
					Open Modal
				</button>
				{/* вызов при нажатии  navigate с аргументом "/login"*/}
				<button className='btn  btn-outline-success' onClick={()=>navigate("/login")}>
					login
				</button>
			</div>
		</nav>
	)
}

export default Header
