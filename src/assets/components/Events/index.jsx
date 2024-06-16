import useEventsData from '../../../hooks/useEventsData'
import Event from './components/Event'
import PropTypes from 'prop-types'

const Events = ({ searchTerm }) => {
	const { events, isLoading, error } = useEventsData()

	const handleEventButtonClick = (id) => {
		console.log('Event clicked:', id)
	}

	const renderEvents = () => {
		let filteredEvents = events

		if (searchTerm.length > 0) {
			filteredEvents = filteredEvents.filter((event) => {
				return event.name.toLowerCase().includes(searchTerm.toLowerCase())
			})
		}

		return filteredEvents.map(
			(event) => (
				console.log(event),
				(
					<Event
						key={event.id}
						name={event.name}
						date={event.dates.start.localDate}
						description={event.info}
						image={event.images[0].url}
						id={event.id}
						link={event.url}
						onEventClick={handleEventButtonClick}
						venue={event._embedded.venues[0].name}
					/>
				)
			)
		)
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div>
			<div className="events">{renderEvents()}</div>
		</div>
	)
}

Events.propTypes = {
	searchTerm: PropTypes.string.isRequired
}

export default Events
