import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import NavBar from '../../components/NavBar'
import Events from '../../components/Events'
import useEventsData from '../../../hooks/useEventsData'
import styles from './Home.module.css'

const Home = () => {
	const { events, isLoading, error, fetchEvents, page } = useEventsData()
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		fetchEvents()
	}, [])

	const handleNavbarSearch = (term) => {
		setSearchTerm(term)
		fetchEvents(`&keyword=${term}`)
	}

	const handlePageClick = ({ selected }) => {
		fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
	}

	const renderEvents = () => {
		if (isLoading) {
			return <div>Loading...</div>
		}
		if (error) {
			return <div>Error: {error.message}</div>
		}
		return (
			<div>
				<Events searchTerm={searchTerm} events={events} />
				<ReactPaginate
					className={styles.pagination}
					activeClassName={styles.active}
					disabledClassName={styles.disabled}
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={page.totalPages || 0}
					previousLabel="<"
					renderOnZeroPageCount={null}
				/>
			</div>
		)
	}

	return (
		<>
			<NavBar onSearch={handleNavbarSearch} />
			{renderEvents()}
		</>
	)
}

export default Home
