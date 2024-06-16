import { useState } from 'react'
import NavBar from './assets/components/NavBar'
import Events from './assets/components/Events'
import './App.css'

function App() {
	const [searchTerm, setSearchTerm] = useState('')

	const handleNavbarSearch = (term) => {
		setSearchTerm(term)
	}

	return (
		<>
			<NavBar onSearch={handleNavbarSearch} />
			<Events searchTerm={searchTerm} />
		</>
	)
}

export default App
