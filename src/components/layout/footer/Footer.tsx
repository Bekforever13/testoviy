import React from 'react'
import { Link } from 'react-router-dom'
import instagram from 'src/assets/images/ig.svg'
import facebook from 'src/assets/images/fb.svg'
import s from './Footer.module.scss'

const Footer: React.FC = () => {
	return (
		<div className={s.footer}>
			<div className={s.left}>
				<div>
					<h4>Категории</h4>
					<Link to='/'>Мужское</Link>
					<Link to='/women'>Женское</Link>
					<Link to='/kids'>Детское</Link>
				</div>
				<div>
					<h4>О нас</h4>
					<Link to='/'>Контакты</Link>
					<Link to='/'>О Компании</Link>
					<Link to='/'>Правила пользования</Link>
				</div>
				<div>
					<h4>Мой аккаунт</h4>
					<Link to='/'>Войти</Link>
					<Link to='/'>Заказы</Link>
					<Link to='/'>Список желаний</Link>
				</div>
			</div>
			<div className={s.right}>
				<a className={s.tel} href='tel:+998992807576'>
					+998 (99) 280 75 76
				</a>
				<a className={s.mail} href='mailto:example@gmail.com'>
					example@gmail.com
				</a>
				<a className={s.mail} href='mailto:example@mail.ru'>
					example@mail.ru
				</a>
				<div>
					<img src={instagram} alt='instagram' />
					<img src={facebook} alt='facebook' />
				</div>
			</div>
		</div>
	)
}

export { Footer }
