import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

// import Header from '@/components/navigate';
import { Loading, Main, Menu, NotFound, Scroll, Walk } from '@/pages';

import '@/assets/SUIT/SUIT.css';
import '@/style/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="/walk" element={<Walk />} />
				<Route path="/loading" element={<Loading />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/scroll" element={<Scroll />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
