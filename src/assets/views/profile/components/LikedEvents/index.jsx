import { useEffect, useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../../../../utils/constants'
import Event from '../../../../components/Events/components/Event'
import { useNavigate } from 'react-router-dom'
import styles from './LikedEvents.module.css'

const LikedEvents = () => {
	const [likedEvents, setLikedEvents] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		const fetchLikedEvents = async () => {
			try {
				setLoading(true)
				const likedEvents =
					JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
				const results = []
				for (const eventId of likedEvents) {
					const response = await fetch(
						`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${
							import.meta.env.VITE_TICKETMASTER_API_KEY
						}`
					)
					const data = await response.json()
					results.push(data)
				}
				setLikedEvents(results)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchLikedEvents()
	}, [])

	const handleEventButtonClick = (id) => {
		navigate(`/event/${id}`)
	}

	if (Object.keys(error).length > 0) {
		return <div>Error: {error.message}</div>
	}

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className={styles.likedEventsWrapper}>
			{likedEvents.map((event) => (
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
			))}
		</div>
	)
}

export default LikedEvents
