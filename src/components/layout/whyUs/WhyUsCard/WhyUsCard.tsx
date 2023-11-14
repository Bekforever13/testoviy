import React from 'react'
import s from '../WhyUs.module.scss'

type TProps = {
	img: string
	text: string
	desc: string
}

const WhyUsCard: React.FC<TProps> = ({ img, text, desc }) => {
	return (
		<div className={s.card}>
			<img src={img} alt='avatar' />
			<h3>{text}</h3>
			<p>{desc}</p>
		</div>
	)
}

export { WhyUsCard }
