import { useLayoutEffect, useRef, useState } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { ReactComponent as Logo } from '@/assets/icon/d0dos.svg';
import { ReactComponent as Github } from '@/assets/icon/github.svg';
import { ReactComponent as Insta } from '@/assets/icon/insta.svg';
import { Card } from '@/components/card';
import style from '@/style/main.module.scss';

const hashtags = ['hcdosdteur', 'D0Dos', 'KDMHS', '21HD', 'cat_lover'];
const cards = ['Repo-Pack', 'trust', 'virus', 'ola', 'P&P', 'dimitube'];

export const Main = () => {
	const cardPackRef = useRef<HTMLDivElement>(null);
	const motionRef = useRef<HTMLDivElement>(null);
	const packRef = useRef<HTMLDivElement>(null);
	const [scrollrange, setScrollrange] = useState<number>(0);

	const { scrollYProgress } = useScroll();

	const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
	const scroll = useTransform(scrollYProgress, [0, 1], [0, -scrollrange + 500]);
	const rate = [0, 0.2];
	const animation = {
		0: useTransform(scrollYProgress, rate, ['rotate(4.85deg)', 'rotate(0deg)']),
		1: useTransform(scrollYProgress, rate, [
			'translateX(-44rem) rotate(7deg)',
			'translateX(0rem) rotate(0deg)',
		]),
		2: useTransform(scrollYProgress, rate, [
			'translateX(-88rem) rotate(9.15deg)',
			'translateX(0rem) rotate(0deg)',
		]),
	};

	const physics = { damping: 5, mass: 0.02, stiffness: 100 };
	const spring = useSpring(scroll, physics);

	useLayoutEffect(() => {
		if (motionRef.current) setScrollrange(motionRef.current.clientWidth);
	}, []);

	return (
		<div id="wrapper" className={style.wrapper}>
			<div className={style.fixed_container}>
				<div className={style.container}>
					<motion.div className={style.profile} style={{ opacity }}>
						<Profile />
					</motion.div>
					<div ref={cardPackRef} className={style.cardpack}>
						<div ref={packRef} className={style.pack}>
							<motion.div
								ref={motionRef} // carousel
								className={style.motion}
								style={{ x: spring }}
							>
								{cards.map((item, idx) => {
									if (idx === 0 || idx === 1 || idx === 2) {
										return (
											<motion.div
												className={[
													style.card,
													style[`card${idx}`],
													style.shadow,
												].join(' ')}
												style={{
													transform: animation[idx],
												}}
												key={idx}
											>
												<motion.div
													whileHover={{ scale: 1.2 }}
													whileTap={{ scale: 0.9 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 17,
													}}
													className={style.title}
												>
													{item}
												</motion.div>
											</motion.div>
										);
									} else {
										return (
											<Card key={idx} shadow>
												<motion.div
													whileHover={{ scale: 1.2 }}
													whileTap={{ scale: 0.9 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 17,
													}}
													className={style.title}
												>
													{item}
												</motion.div>
											</Card>
										);
									}
								})}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Profile = () => (
	<>
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
	</>
);
