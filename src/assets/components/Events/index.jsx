import Event from './components/Event'
import PropTypes from 'prop-types'
import styles from './Events.module.css'
import { useNavigate } from 'react-router-dom'

const Events = ({ searchTerm, events }) => {
	const navigate = useNavigate()

	const handleEventButtonClick = (id) => {
		navigate(`/details/${id}`)
	}

	const renderEvents = () => {
		let filteredEvents = events

		if (searchTerm.length > 0) {
			filteredEvents = filteredEvents.filter((event) => {
				return event.name.toLowerCase().includes(searchTerm.toLowerCase())
			})
		}

		return filteredEvents.map((event) => (
			<Event
				key={event.id}
				name={event.name}
				date={event.dates.start.localDate}
				info={event.info}
				image={event.images[0].url}
				id={event.id}
				link={event.url}
				onEventClick={handleEventButtonClick}
				venue={event._embedded?.venues[0]?.name}
			/>
		))
	}

	return (
		<div>
			<div className={styles.events}>{renderEvents()}</div>
		</div>
	)
}

Events.propTypes = {
	searchTerm: PropTypes.string.isRequired,
	events: PropTypes.array.isRequired
}

export default Events
