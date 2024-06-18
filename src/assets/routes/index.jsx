import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import Details from '../views/Details'
import Error404 from '../views/Error404'
import Profile from '../views/profile'
import LikedEvents from '../views/profile/components/LikedEvents'
import MyInfo from '../views/profile/components/MyInfo'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error404 />
	},
	{
		path: '/event/:eventId',
		element: <Details />
	},
	{
		path: '/profile',
		element: <Profile />,
		children: [
			{
				path: 'my-info',
				element: <MyInfo />
			},
			{
				path: 'liked-events',
				element: <LikedEvents />
			}
		]
	}
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
