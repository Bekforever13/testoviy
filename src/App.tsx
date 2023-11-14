import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes/routes'
import { Layout } from './components/layout/Layout'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routes.map(item => (
					<Route key={item.path} path={item.path} element={item.element} />
				))}
			</Route>
		</Routes>
	)
}

export { App }
