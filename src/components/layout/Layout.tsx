import React from 'react'
import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'
import { Brands } from './brands/Brands'
import { Designers } from './designers/Designers'
import { WhyUs } from './whyUs/WhyUs'
import { Blog } from './blog/Blog'
import { Footer } from './footer/Footer'
import s from './Layout.module.scss'

const Layout: React.FC = () => {
	return (
		<div className={s.layout}>
			<Header />
			<Outlet />
			<Brands />
			<Designers />
			<WhyUs />
			<Blog />
			<Footer />
		</div>
	)
}

export { Layout }
