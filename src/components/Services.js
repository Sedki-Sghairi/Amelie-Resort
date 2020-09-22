import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'Free cocktails',
				info: 'lorem ipsum lecun sit alik constalis fab abeleik keif lacking asfwoj magine coutch'
			},
			{
				icon: <FaHiking />,
				title: 'Sidibou hicking',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif sido diug haick the mountain'
			},
			{
				icon: <FaShuttleVan />,
				title: 'Free shuttle',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif lack aswak tunis'
			},
			{
				icon: <FaBeer />,
				title: 'Celti beer',
				info: 'lorem ipsum folar lecun sit alik constalis fab abeleik keif lacking bainama dima labes'
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
