/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Aboutme from './src/aboutme';
import Contact from './src/contact';
import Project from './src/projectspage';
import Service from './src/service';
import Home from './src/homepage';

const MainRouter = () => {
	return (
		<div>
			<Layout />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/homepage" element={<Home />} />
				<Route path="/aboutme" element={<Aboutme />} />
				<Route path="/projectspage" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/service" element={<Service />} />
			</Routes>
		</div>
	);
};

export default MainRouter;