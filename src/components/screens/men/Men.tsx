import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { UiButton } from 'src/components/ui'
import { Select } from 'antd'
import { ItemCard } from 'src/components/shared'
import s from './Men.module.scss'
import men from 'src/assets/images/men.png'
import men1 from 'src/assets/images/men1.png'
import men2 from 'src/assets/images/men2.png'
import men3 from 'src/assets/images/men3.png'
import men4 from 'src/assets/images/men4.png'
import men5 from 'src/assets/images/men5.png'
import men6 from 'src/assets/images/men6.png'

const options = [
	{ value: 'asc', label: 'Цена по возрастанию ' },
	{ value: 'desc', label: 'Цена по убыванию ' },
]

const items = [
	{ img: men1, text: 'Белый Bonsai', price: 30000 },
	{ img: men2, text: 'Белый Plade', price: 32000 },
	{ img: men3, text: 'Белый Deta Plade', price: 45000 },
	{ img: men4, text: 'Чёрный North Face', price: 35000 },
	{ img: men5, text: 'Чёрный Plain Godzilla', price: 32000 },
	{ img: men6, text: 'Чёрный Plain Sharky', price: 45000 },
]

const Men: React.FC = () => {
	return (
		<div className={s.men}>
			<div className={s.banner}>
				<img src={men} alt='men' />
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
					{items.map((item, index) => (
						<ItemCard
							key={index}
							img={item.img}
							text={item.text}
							price={item.price}
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

export { Men }
