import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@css/index.scss';
import '@/assets/Pretendard/index.css';
import Header from '@/components/NavBar/Nav';
import { NotFound, Walk, Menu, Scroll, Loading, Main } from '@/pages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
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
