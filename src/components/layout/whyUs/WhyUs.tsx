import React from 'react'
import s from './WhyUs.module.scss'
import { WhyUsCard } from './WhyUsCard/WhyUsCard'
import verify from 'src/assets/images/verify.svg'
import settings from 'src/assets/images/setting.svg'
import transactions from 'src/assets/images/transaction.svg'

const WhyUs: React.FC = () => {
	const data = [
		{
			img: verify,
			text: 'Маркетплейс',
			desc: 'Компания Lode X - позволяет людям редактировать свою одежду.',
		},
		{
			img: verify,
			text: 'Оригинал ',
			desc: 'Мы следим за оригинальностью продаваемых вещей ',
		},
		{
			img: settings,
			text: 'Подбор ',
			desc: 'Удобный подбор одежды по всем параметрам',
		},
		{
			img: transactions,
			text: 'Безопасная сделка',
			desc: 'Безопасность платежей для покупателей и продавцов',
		},
	]
	return (
		<div className={s.whyus}>
			<h2>Почему выбирают именно нас?</h2>
			<div className={s.cards}>
				{data.map(item => (
					<WhyUsCard img={item.img} text={item.text} desc={item.desc} />
				))}
			</div>
		</div>
	)
}

export { WhyUs }
