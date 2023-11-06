import { ReactComponent as Logo } from '@/assets/icon/d0dos.svg';
import { ReactComponent as Github } from '@/assets/icon/github.svg';
import { ReactComponent as Insta } from '@/assets/icon/insta.svg';
import { Card } from '@/components/card';
import style from '@/style/main.module.scss';

const hashtags = ['hcdosdteur', 'D0Dos', 'KDMHS', '21HD', 'cat_lover'];

export const Main = () => {
	return (
		<div id="wrapper" className={style.wrapper}>
			<div className={style.container}>
				<Profile />
				<div className={style.cardpack}>
					<Card className="card1" />
					<Card className="card2" />
					<Card className="card3" />
					<Card className="card3" />
					<Card className="card3" />
					<Card className="card3" />
					<Card className="card3" />
				</div>
			</div>
		</div>
	);
};

const Profile = () => (
	<div className={style.profile}>
		<Logo className={style.logo} />
		<div className={style.info}>
			<div className={style.pro}>developer</div>
			<div className={style.name}>
				<div className={style.en}>Kim-Dohyeon</div>
				<div className={style.ko}>김도현</div>
			</div>
			<div className={style.hashtag}>
				{hashtags.map((item, index) => (
					<span key={index}>#{item}</span>
				))}
			</div>
		</div>
		<div className={style.link}>
			<div className={style.platform}>
				<Insta />
				<span>instagram</span>
			</div>
			<div className={style.platform}>
				<Github />
				<span>github</span>
			</div>
		</div>
	</div>
);
