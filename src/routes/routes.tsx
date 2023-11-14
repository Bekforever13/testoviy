import {
	Favorites,
	Kids,
	Men,
	PatternPrint,
	Profile,
	Rules,
	SecureTransaction,
	Women,
} from 'src/components/screens'

export const routes = [
	{ path: '/', element: <Men /> },
	{ path: '/:item', element: <PatternPrint /> },
	{ path: '/women', element: <Women /> },
	{ path: '/kids', element: <Kids /> },
	{ path: '/secure_transactions', element: <SecureTransaction /> },
	{ path: '/rules', element: <Rules /> },
	{ path: '/favorites', element: <Favorites /> },
	{ path: '/profile', element: <Profile /> },
]
