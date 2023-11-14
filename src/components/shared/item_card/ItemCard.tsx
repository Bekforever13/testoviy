import React from 'react'
import heart from 'src/assets/images/heart.svg'
import cart from 'src/assets/images/cart.svg'
import { UiButton } from 'src/components/ui'
import s from './ItemCard.module.scss'
import { useNavigate } from 'react-router-dom'

type TProps = {
	img: string
	text: string
	price: number
}

const ItemCard: React.FC<TProps> = ({ img, text, price }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/${text}`)} className={s.card}>
			<img className={s.item_img} src={img} alt='item_image' />
			<div className={s.text_zone}>
				<div className={s.text}>
					<h5>{text}</h5>
					<span>{price} сум</span>
				</div>
				<div className={s.actions}>
					<div>
						<img src={heart} alt='heart' />
						<img src={cart} alt='cart' />
					</div>
					<UiButton
						style={{ color: '#000', border: '1px solid', borderRadius: '50px' }}
					>
						Подробнее
					</UiButton>
				</div>
			</div>
		</div>
	)
}

export { ItemCard }
