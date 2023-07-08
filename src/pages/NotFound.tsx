import { Link } from 'react-router-dom';
import '@css/notFound.scss';

export const NotFound = () => {
	return (
		<div className="wrapper">
			<img className="error" src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
			<div className="errorCode">
				<span>ERROR 404</span>
			</div>
			<p className="message">The page you were looking for could not be found.</p>
			<Link to="/">
				<p className="btn">Back to MainPage</p>
			</Link>
		</div>
	);
};
