import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/icon/logo_v1.svg';
import { Menu } from '@/components/navigate/menu';

import style from './index.module.scss';

const Header = () => {
	return (
		<div className={style.frame_container}>
			<div style={{ display: 'contents' }} tabIndex={0}>
				<nav>
					<div className={style.contents}>
						<div className={style.logo_box}>
							<div className={style.logo}>
								<Logo width="10rem" height="auto" />
							</div>
							<Link to="/">
								<div className={style.name}>D0Dos</div>
							</Link>
						</div>
						<Menu />
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
