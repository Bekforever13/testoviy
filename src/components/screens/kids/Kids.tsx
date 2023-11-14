import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { UiButton } from 'src/components/ui'
import { Select } from 'antd'
import { ItemCard } from 'src/components/shared'
import s from './Kids.module.scss'
import kid from 'src/assets/images/kid.png'
import kid1 from 'src/assets/images/kid1.png'
import kid2 from 'src/assets/images/kid2.png'
import kid3 from 'src/assets/images/kid3.png'
import kid4 from 'src/assets/images/kid4.png'
import kid5 from 'src/assets/images/kid5.png'
import kid6 from 'src/assets/images/kid6.png'

const options = [
	{ value: 'asc', label: 'Цена по возрастанию ' },
	{ value: 'desc', label: 'Цена по убыванию ' },
]

const itemCards = [
	{ img: kid1, text: 'Kelldone', price: 30000 },
	{ img: kid2, text: 'Kenzo Paris', price: 32000 },
	{ img: kid3, text: 'Moschino', price: 45000 },
	{ img: kid4, text: 'Чёрный Palm Angels', price: 35000 },
	{ img: kid5, text: 'Чёрный Balmair Paris', price: 32000 },
	{ img: kid6, text: 'Белый Palm Angels', price: 45000 },
]

const Kids: React.FC = () => {
	return (
		<div className={s.kids}>
			<div className={s.banner}>
				<img className={s.img} src={kid} alt='men' />
				<div className={s.text_zone}>
					<h1>Универсальное решение для ваших нужд в одежде</h1>
					<p>
						Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в
						Lode X. Мы предлагаем одежду ведущих брендов и редактирование
						изображений на ней.
					</p>
					<Link to='/'>
						читать далее <AiOutlineArrowRight />
					</Link>
				</div>
			</div>
			<div className={s.cards}>
				<div className={s.cards_categories}>
					<div>
						<h3 className={s.active}>Новинки</h3>
						<h3>Популярные</h3>
						<UiButton style={{ color: '#000' }}>Редактировать</UiButton>
					</div>
					<span className={s.last_receives}>Последние поступления</span>
				</div>
				<div className={s.cards_heading}>
					<h2>Новые рисунки</h2>
					<span className={s.sort}>
						Сортировать:{' '}
						<Select
							style={{ width: '100%' }}
							defaultValue={options[0]}
							options={options}
						/>
					</span>
				</div>
				<div className={s.item_cards}>
					{itemCards.map((card, index) => (
						<ItemCard
							key={index}
							img={card.img}
							text={card.text}
							price={card.price}
						/>
					))}
				</div>
			</div>
			<div className={s.more}>
				<UiButton
					style={{
						color: '#000',
						border: '1px solid',
						width: 'fit-content',
					}}
				>
					Показать больше
				</UiButton>
			</div>
		</div>
	)
}

export { Kids }
