import React from 'react'
import { DesignerCard } from './DesignerCard/DesignerCard'
import s from './Designers.module.scss'

const Designers: React.FC = () => {
	return (
		<div className={s.designers}>
			<h2>Популярные дизайнеры</h2>
			<div className={s.cards}>
				{[...new Array(4)].map(() => (
					<DesignerCard />
				))}
			</div>
		</div>
	)
}

export { Designers }
