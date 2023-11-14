import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.scss'

type TProps = {
	isOpen: boolean
	setOpen: (el: React.SetStateAction<boolean>) => void
}

const HeaderHamburgerMenu: React.FC<TProps> = ({ isOpen, setOpen }) => {
	const { pathname } = useLocation()

	return (
		<div className={isOpen ? s.hLinks : s.hide}>
			<div className={s.nav}>
				<Link
					onClick={() => setOpen(false)}
					to='/'
					className={pathname === '/' ? s.active : ''}
				>
					Мужская
				</Link>
				<Link
					onClick={() => setOpen(false)}
					to='/women'
					className={pathname === '/women' ? s.active : ''}
				>
					Женская
				</Link>
				<Link
					onClick={() => setOpen(false)}
					to='/kids'
					className={pathname === '/kids' ? s.active : ''}
				>
					Детская
				</Link>
				<Link
					to='/secure_transactions'
					className={pathname === '/secure_transactions' ? s.active : ''}
				>
					Безопасная сделка
				</Link>
				<Link
					onClick={() => setOpen(false)}
					to='/rules'
					className={pathname === '/rules' ? s.active : ''}
				>
					Правило пользования
				</Link>
			</div>
		</div>
	)
}
export { HeaderHamburgerMenu }
