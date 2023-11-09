import React from 'react';

import { motion, MotionValue } from 'framer-motion';

import style from './index.module.scss';

export const Card: React.FC<{
	children?: React.ReactElement[] | React.ReactElement;
	animation?: MotionValue<string>;
	className?: string;
	shadow?: boolean;
}> = ({ children, className, animation, shadow }) => {
	return (
		<motion.div
			className={[
				style.card,
				className ? style[className] : undefined,
				shadow ? style.shadow : undefined,
			].join(' ')}
			style={{ transform: animation }}
		>
			{children}
		</motion.div>
	);
};

{
	/* <motion.div
	className={[style.card, style[`card${idx}`], style.shadow].join(' ')}
	style={{
		transform: animation[idx],
	}}
	key={idx}
></motion.div>; */
}
