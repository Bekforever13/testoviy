import React from 'react'
import s from './Blog.module.scss'
import { BlogCard } from './BlogCard/BlogCard'
import blog from 'src/assets/images/blog.svg'

const Blog: React.FC = () => {
	const data = [
		{
			img: blog,
			desc: 'Эта рубашка спасет. Вы сэкономите 40$ при себе Следующая онлайн-покупка',
		},
		{
			img: blog,
			desc: 'История позади Lode X: Это Стильное  движение',
		},
		{
			img: blog,
			desc: 'Что надеть Мадрид: 8 нарядов для Сделайте так, чтобы вы выглядели местными',
		},
		{
			img: blog,
			desc: 'Руководство по покупке Костюм: Что ты Надо знать',
		},
	]
	return (
		<div className={s.blog}>
			<h2>Блог</h2>
			<div className={s.cards}>
				{data.map(item => (
					<BlogCard img={item.img} desc={item.desc} />
				))}
			</div>
		</div>
	)
}

export { Blog }
