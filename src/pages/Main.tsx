import style from '@/style/main.module.scss';

import { Profile } from '@/components/profile';

export const Main = () => {
	return (
		<div id="wrapper" className={style.wrapper}>
			<div className={style.contents}>
				<Profile />
			</div>
		</div>
	);
};
