import styles from './Profile.module.css'
import { Outlet } from 'react-router-dom'

const Profile = () => {
	return (
		<div>
			<h1>Profile</h1>

			<Outlet />
		</div>
	)
}

export default Profile
