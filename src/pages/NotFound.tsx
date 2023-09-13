import { Link } from 'react-router-dom';

import s from '@/style/notFound.module.scss';

export const NotFound = () => {
	return (
		<div id="wrapper" className={s.wrapper}>
			<img
				className={s.error}
				src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
				alt="404"
			/>
			<div className={s.errorCode}>
				<span>ERROR 404</span>
			</div>
			<p className={s.message}>The page you were looking for could not be found.</p>
			<Link to="/">
				<p className={s.btn}>Back to MainPage</p>
			</Link>
		</div>
	);
};
