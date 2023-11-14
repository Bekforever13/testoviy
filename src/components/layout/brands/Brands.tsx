import React from 'react'
import s from './Brands.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import nike from 'src/assets/images/nike.png'
import adidas from 'src/assets/images/adidas.png'
import reebok from 'src/assets/images/reebok.png'
import puma from 'src/assets/images/puma.png'
import lacoste from 'src/assets/images/lacoste.png'
import gucci from 'src/assets/images/gucci.png'
import lv from 'src/assets/images/lv.jpg'

import 'swiper/css'
import 'swiper/css/navigation'

const Brands: React.FC = () => {
	return (
		<div className={s.brands}>
			<h2>Популярные бренды</h2>
			<Swiper
				modules={[Navigation]}
				navigation
				spaceBetween={30}
				slidesPerView={5}
			>
				<SwiperSlide>
					<img src={nike} alt='nike' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={adidas} alt='adidas' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={reebok} alt='reebok' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={puma} alt='puma' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={lacoste} alt='lacoste' />
				</SwiperSlide>
				<SwiperSlide>
					<img width={100} src={gucci} alt='gucci' />
				</SwiperSlide>
				<SwiperSlide>
					<img width={100} src={lv} alt='lv' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export { Brands }
