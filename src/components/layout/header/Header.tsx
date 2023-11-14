import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { UiButton } from 'src/components/ui'
import logo from 'src/assets/images/header_menu-logo.svg'
import s from './Header.module.scss'
import { Badge, Input } from 'antd'
import Hamburger from 'hamburger-react'
import { HeaderHamburgerMenu } from './HeaderHamburgerMenu'
import { useWindowSize } from 'src/hooks/useWindowSize'

const Header: React.FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [isOpen, setOpen] = React.useState(false)
	const { width } = useWindowSize()

	return (
		<div className={s.header}>
			<div className={s.upper}>
				<img onClick={() => navigate('/')} src={logo} alt='logo' />
				<div className={s.nav}>
					<Link to='/' className={pathname === '/' ? s.active : ''}>
						Мужская
					</Link>
					<Link to='/women' className={pathname === '/women' ? s.active : ''}>
						Женская
					</Link>
					<Link to='/kids' className={pathname === '/kids' ? s.active : ''}>
						Детская
					</Link>
					<Link
						to='/secure_transactions'
						className={pathname === '/secure_transactions' ? s.active : ''}
					>
						Безопасная сделка
					</Link>
					<Link to='/rules' className={pathname === '/rules' ? s.active : ''}>
						Правило пользования
					</Link>
				</div>
				<div className={s.btns}>
					<Badge count='6' style={{ backgroundColor: '#33CAFF' }}>
						<Link to='/favorites'>
							<AiOutlineHeart color='33CAFF' size='24' />
						</Link>
					</Badge>
					<Link to='/profile'>
						<AiOutlineUser color='33CAFF' size='24' />
					</Link>
					<UiButton style={{ color: '#000' }}>Contact US</UiButton>
				</div>
				{width < 850 && (
					<div className={`s.hamburger ${isOpen ? s.white : ''}`}>
						<Hamburger
							size={27}
							toggled={isOpen}
							toggle={setOpen}
							direction='left'
						/>
					</div>
				)}
				<HeaderHamburgerMenu isOpen={isOpen} setOpen={setOpen} />
			</div>
			<div className={s.lower}>
				<BsSearch size='24' />
				<Input placeholder='Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... ' />
			</div>
		</div>
	)
}

export { Header }
