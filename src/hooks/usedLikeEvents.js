import { useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../assets/utils/constants'

const checkLiked = (eventId) => {
	const likedEvents =
		JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || '[]'

	return likedEvents.includes(eventId)
}

const useLikeEvents = (eventId) => {
	const [liked, setLiked] = useState(checkLiked(eventId))

	const toggleLike = () => {
		const likedEvents =
			JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || '[]'

		const eventIndex = likedEvents.indexOf(eventId)

		if (eventIndex === -1) {
			likedEvents.push(eventId)
			setLiked(true)
		} else {
			likedEvents.splice(eventIndex, 1)
			setLiked(false)
		}

		localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents))
	}

	return {
		liked,
		toggleLike
	}
}

export default useLikeEvents
