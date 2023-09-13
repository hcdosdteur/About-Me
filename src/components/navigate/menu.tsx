import { Link } from 'react-router-dom';

import style from './menu.module.scss';

export const Menu = () => {
	return (
		<div className={style.nav}>
			<input id="menu" type="checkbox" />
			<label htmlFor="menu">Menu</label>
			<ul className={style.menu}>
				<li>
					<Link to="#0">
						<span>About</span>
						<i className="fas fa-address-card" aria-hidden="true"></i>
					</Link>
				</li>
				<li>
					<Link to="#0">
						<span>Projects</span>
						<i className="fas fa-tasks" aria-hidden="true"></i>
					</Link>
				</li>
				<li>
					<Link to="#0">
						<span>Clients</span>
						<i className="fas fa-users" aria-hidden="true"></i>
					</Link>
				</li>
				<li>
					<Link to="#0">
						<span>Contact</span>
						<i className="fas fa-envelope-open-text" aria-hidden="true"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

{
	/* <ul>
								<li className={style.router}>
									<Link to="/404">404</Link>
								</li>
								<li className={style.router}>
									<Link to="/walk">Walk</Link>
								</li>
								<li className={style.router}>
									<Link to="/loading">Loading</Link>
								</li>
								<li className={style.router}>
									<Link to="/menu">Menu</Link>
								</li>
								<li className={style.router}>
									<Link to="/scroll">Scroll</Link>
								</li>
							</ul> */
}
