import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Details.module.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const iconCalendar = <FontAwesomeIcon icon={faCalendar} />
const iconback = <FontAwesomeIcon icon={faChevronLeft} />
const Details = () => {
	const { eventId } = useParams()
	const [eventData, setEventData] = useState({})
	const [error, setError] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	console.log(import.meta.env.VITE_TICKETMASTER_API_KEY)

	useEffect(() => {
		const fecthEventData = async () => {
			try {
				const response = await fetch(
					`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${
						import.meta.env.VITE_TICKETMASTER_API_KEY
					}`
				)
				const data = await response.json()
				console.log(data)
				setEventData(data)
				setIsLoading(false)
			} catch (error) {
				setEventData({})
				setError(error)
			}
		}
		fecthEventData()
	}, [])

	if (isLoading && Object.keys(eventData) === 0) return <div>Loading...</div>
	if (Object.keys(error) > 0) return <div>Error: {error.message}</div>

	return (
		<div className={styles.container}>
			<Link to="/" className={styles.eventBackBtn}>
				{iconback} Back
			</Link>

			{eventData.images ? (
				<img
					src={eventData.images[0].url}
					alt={eventData.name}
					className={styles.eventHeroImage}
				/>
			) : null}

			<div className={styles.mainInfoContainer}>
				<h2 className={styles.eventTitle}>{eventData.name}</h2>

				{eventData.dates?.start.localDate ? (
					<p className={styles.eventDate}>
						{iconCalendar}{' '}
						{moment(eventData.dates.start.localDate).format('MMMM DD YYYY')}
					</p>
				) : null}

				{eventData.info ? (
					<div className={styles.eventInfo}>
						<h4>Info</h4>
						<p>{eventData.info}</p>
					</div>
				) : null}

				{eventData.seatmap ? (
					<div className={styles.eventSeatmap}>
						<h4>Seatmap</h4>
						<img
							src={eventData.seatmap.staticUrl}
							alt={eventData.name}
							className={styles.eventSeatmapImage}
						/>
					</div>
				) : null}

				{eventData.pleaseNote ? (
					<div className={styles.eventPleaseNote}>
						<h4>Please Note</h4>
						<p>{eventData.pleaseNote}</p>
					</div>
				) : null}

				{eventData.priceRanges ? (
					<div className={styles.eventPriceRanges}>
						<h4>Price Ranges</h4>
						{eventData.priceRanges.map((priceRange) => (
							<p key={priceRange.type}>
								{priceRange.type} - {priceRange.currency} {priceRange.min} -{' '}
								{priceRange.max}
							</p>
						))}
					</div>
				) : null}

				{eventData.url ? (
					<a
						href={eventData.url}
						target="_blank"
						rel="noreferrer"
						className={styles.eventBtn}
					>
						More Info
					</a>
				) : null}
			</div>
		</div>
	)
}

export default Details
