import style from '@/style/main.module.scss';

import { Container } from '@/components/container';

const hashtags = ['hcdosdteur', 'D0Dos', 'KDMH', '21HD', '21HD', '21HD', '21HD', '21HD'];

export const Profile = () => {
	return (
		<Container>
			<div className={style.photo}></div>
			<div className={style.info}>
				<div className={style.pro}>developer</div>
				<div className={style.name}>Kim-Dohyeon</div>
				<div className={style.hashtag}>
					{hashtags.map((item, index) => (
						<span key={index}>#{item}</span>
					))}
				</div>
			</div>
		</Container>
	);
};
