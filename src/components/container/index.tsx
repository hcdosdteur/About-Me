import React from 'react';

import style from './index.module.scss';

interface ContainerProps {
	children: React.ReactElement[] | React.ReactElement;
	css?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, css }) => {
	return (
		<div className={style.container} style={css}>
			{children}
		</div>
	);
};
