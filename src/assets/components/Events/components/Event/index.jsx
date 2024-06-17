import PropTypes from 'prop-types'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from './Event.module.css'
// import { Link } from 'react-router-dom'

const iconCalendar = <FontAwesomeIcon icon={faCalendar} />
const iconLocation = <FontAwesomeIcon icon={faLocationDot} />
const Event = ({ date, id, name, image, onEventClick, venue, info }) => {
	const handleSeeMoreClick = (e) => {
		e.stopPropagation()
		onEventClick(id)
	}

	return (
		<div className={styles.event}>
			<img src={image} alt={name} className={styles.eventImage} />
			<div className={styles.eventDetails}>
				<h2 className={styles.eventName}>{name}</h2>
				{venue && (
					<p className={styles.eventVenue}>
						{iconLocation} {venue}
					</p>
				)}
				<p className={styles.eventDate}>
					{iconCalendar} {moment(date).format('MMMM DD YYYY')}
				</p>
				{info && <p className={styles.eventDescription}>{info}</p>}
				<button onClick={handleSeeMoreClick} className={styles.eventBtn}>
					{/* <Link to={`/details/${id}`}>Ver mas</Link> */}
					Ver mas
				</button>
			</div>
		</div>
	)
}

Event.propTypes = {
	date: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onEventClick: PropTypes.func.isRequired,
	venue: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired
}

export default Event
