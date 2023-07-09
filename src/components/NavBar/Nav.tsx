import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from '@css/Nav.module.scss';
import SVG from '@components/svg';
import logo from '#/bc_logo.png';
import github from '#/github.svg';
import insta from '#/instagram.svg';

const Header = () => {
	return (
		<div className={s.frame_container}>
			<div style={{ display: 'contents' }} tabIndex={0}>
				<nav>
					<div className={s.contents}>
						<Link to="/">
							<div className={s.logo_box}>
								<SVG src={logo} rec={4} />
								<span>HCDOSDTEUR</span>
							</div>
						</Link>
						<ul>
							<li className={s.router}>
								<Link to="/404">404</Link>
							</li>
							<li className={s.router}>
								<Link to="/walk">Walk</Link>
							</li>
							<li className={s.router}>
								<Link to="/loading">Loading</Link>
							</li>
							<li className={s.router}>
								<Link to="/menu">Menu</Link>
							</li>
							<li className={s.router}>
								<Link to="/scroll">Scroll</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
