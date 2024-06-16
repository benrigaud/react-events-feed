import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ onSearch }) => {
	const [search, setSearch] = useState('')

	useEffect(() => {
		console.log('1010 effect')
	}, [search, onSearch])

	const handleInputChange = (e) => {
		setSearch(e.target.value)
	}

	const handleInputKeyDown = (e) => {
		if (e.key === 'Enter') {
			onSearch(search)
		}
	}

	return (
		<div className="navbar">
			<h1>Tickets</h1>
			<input
				placeholder="Search your favorite event"
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
				value={search}
			/>
		</div>
	)
}

NavBar.propTypes = {
	onSearch: PropTypes.func.isRequired
}

export default NavBar
