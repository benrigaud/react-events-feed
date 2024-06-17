import { useState } from 'react'

const useEventsData = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const fetchEvents = async (params) => {
		try {
			const response = await fetch(
				`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
					import.meta.env.VITE_TICKETMASTER_API_KEY
				}${params?.length ? params : ''}`
			)
			const data = await response.json()

			setData(data)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		events: data?._embedded?.events || [],
		page: data?.page || {},
		isLoading,
		error,
		fetchEvents
	}
}

export default useEventsData
