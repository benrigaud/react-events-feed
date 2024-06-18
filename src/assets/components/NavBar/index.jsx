import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './NavBar.module.css'

const iconUser = <FontAwesomeIcon icon={faUser} />

const NavBar = ({ onSearch }) => {
	const [search, setSearch] = useState('')

	useEffect(() => {
		// console.log('1010 effect')
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
		<div className={styles.navbar}>
			<div className={styles.navbarWrapper}>
				<h1>Tickets</h1>
				<input
					placeholder="Search your favorite event"
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					value={search}
				/>
				<Link to="/profile/my-info">{iconUser}</Link>
			</div>
		</div>
	)
}

NavBar.propTypes = {
	onSearch: PropTypes.func.isRequired
}

export default NavBar
