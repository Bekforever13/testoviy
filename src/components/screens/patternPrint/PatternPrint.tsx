import React from 'react'
import s from './PatternPrint.module.scss'

const PatternPrint: React.FC = () => {
	return (
		<div className={s.pattern}>
			<div className={s.head}>
				<h1>Pattern Print</h1>
				<h5>Главная / Мужское / Футболки/ Pattern Print</h5>
				{/* Знаю что тут нужно было бы использовать Breadcrumbs. В реальных проектах я бы их использовал */}
			</div>
			<div className={s.editor}>
				<h4>
					К сожалению с такой библиотекой, в которой можно было бы рисовать,
					менять тексты ещё не работал. Я могу научиться, но потребуется время.
				</h4>
			</div>
		</div>
	)
}

export { PatternPrint }
