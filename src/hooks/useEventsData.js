import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'

const useEventsData = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			try {
				setData(eventsJSON._embedded.events)
				setIsLoading(false)
			} catch (error) {
				setError(error)
			}
		}, 1000)
	}, [])

	return {
		events: data || [],
		isLoading,
		error
	}
}

export default useEventsData
