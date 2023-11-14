import React from 'react'
import s from '../Blog.module.scss'

type TProps = {
	img: string
	desc: string
}

const BlogCard: React.FC<TProps> = ({ img, desc }) => {
	return (
		<div className={s.card}>
			<img src={img} alt='avatar' />
			<p>{desc}</p>
		</div>
	)
}

export { BlogCard }
