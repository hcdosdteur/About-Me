import React from 'react';

import style from './index.module.scss';

const SVG: React.FC<{
	src: string;
	width?: number;
	height?: number;
	rec?: number;
}> = ({ src, width, height, rec }) => {
	return (
		<div className={style.img}>
			<img
				style={{ width: `${rec ? rec : width}rem`, height: `${rec ? rec : height}rem` }}
				src={src}
				alt=""
			/>
		</div>
	);
};

export default SVG;
