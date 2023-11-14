import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { UiButton } from 'src/components/ui'
import { Select } from 'antd'
import { ItemCard } from 'src/components/shared'
import s from './Women.module.scss'
import girl from 'src/assets/images/girl.png'
import girl1 from 'src/assets/images/girl1.png'
import girl2 from 'src/assets/images/girl2.png'
import girl3 from 'src/assets/images/girl3.png'
import girl4 from 'src/assets/images/girl4.png'
import girl5 from 'src/assets/images/girl5.png'
import girl6 from 'src/assets/images/girl6.png'

const options = [
	{ value: 'asc', label: 'Цена по возрастанию ' },
	{ value: 'desc', label: 'Цена по убыванию ' },
]

const itemCardsData = [
	{ img: girl1, text: 'Kelldone', price: 30000 },
	{ img: girl2, text: 'Kenzo Paris', price: 32000 },
	{ img: girl3, text: 'Moschino', price: 45000 },
	{ img: girl4, text: 'Чёрный Palm Angels', price: 35000 },
	{ img: girl5, text: 'Чёрный Balmair Paris', price: 32000 },
	{ img: girl6, text: 'Белый Palm Angels', price: 45000 },
]

const Women: React.FC = () => {
	return (
		<div className={s.women}>
			<div className={s.banner}>
				<img className={s.img} src={girl} alt='men' />
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
					{itemCardsData.map((item, index) => (
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

export { Women }
