import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@css/Nav.scss';
import logo from '#/bc_logo.png';

const Header = () => {
	return (
		<nav>
			<div id="menu">
				<Link to="/">
					<div className="logo_box">
						<img src={logo} className="logo" alt="" />
					</div>
				</Link>
				<ul>
					<li className="link">
						<Link to="/404">404</Link>
					</li>
					<li className="link">
						<Link to="/walk">Walk</Link>
					</li>
					<li className="link">
						<Link to="/loading">Loading</Link>
					</li>
					<li className="link">
						<Link to="/menu">Menu</Link>
					</li>
					<li className="link">
						<Link to="/scroll">Scroll</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
