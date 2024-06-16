import PropTypes from 'prop-types'
import moment from 'moment'

const Event = ({
	date,
	// id,
	name,
	image,
	// onEventClick,
	link,
	venue,
	description
}) => {
	// const handleSeeMoreClick = (e) => {
	// 	e.stopPropagation()
	// 	onEventClick(id)
	// }

	return (
		<div className="event">
			<img src={image} alt={name} className="event-image" />
			<div className="event-details">
				<h2 className="event-name">
					<i className="fas fa-phone"></i> {name}
				</h2>
				<p className="event-venue">{venue}</p>
				<p className="event-date">{moment(date).format('MM/DD/YYYY')}</p>
				<p className="event-description">{description}</p>
				<a href={link} target="_blank" className="btn">
					Get Tickets
				</a>
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
	link: PropTypes.string.isRequired,
	venue: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Event
