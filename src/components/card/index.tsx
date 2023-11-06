import React from 'react';

import style from './index.module.scss';

interface ContainerProps {
	children?: React.ReactElement[] | React.ReactElement;
	css?: React.CSSProperties;
	className?: string;
}

export const Card: React.FC<ContainerProps> = ({ children, className, css }) => {
	return (
		<div className={[style.card, className ? style[className] : undefined].join(' ')} style={css}>
			{children}
		</div>
	);
};
