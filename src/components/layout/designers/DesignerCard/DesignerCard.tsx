import React from 'react'
import avatar from 'src/assets/images/avatar.png'
import s from '../Designers.module.scss'
import { UiRate } from 'src/components/ui'

const DesignerCard: React.FC = () => {
	return (
		<div className={s.card}>
			<img src={avatar} alt='avatar' />
			<h3>Имя Фамилия</h3>
			<UiRate style={{ color: '#33CAFF' }} value={4} />
		</div>
	)
}

export { DesignerCard }
