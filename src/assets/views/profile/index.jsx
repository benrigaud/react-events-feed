import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './Profile.module.css'

const iconHome = <FontAwesomeIcon icon={faHome} />
const iconHeart = <FontAwesomeIcon icon={faHeart} />
const iconUser = <FontAwesomeIcon icon={faUser} />

const Profile = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const handleTabClick = (tab) => {
		navigate(`/profile/${tab}`)
	}

	return (
		<div className={styles.profile}>
			<Link to="/" className={styles.backButton}>
				{iconHome} Home
			</Link>
			<h1>Profile</h1>

			<div>
				<div className={styles.tabs}>
					<span
						className={`${styles.tab} ${
							pathname.includes('my-info') ? styles.active : ''
						}`}
						onClick={() => handleTabClick('my-info')}
					>
						{iconUser} My Info
					</span>
					<span
						className={`${styles.tab} ${
							pathname.includes('liked-events') ? styles.active : ''
						}`}
						onClick={() => handleTabClick('liked-events')}
					>
						{iconHeart} Liked Events
					</span>
				</div>
			</div>

			<Outlet />
		</div>
	)
}

export default Profile
