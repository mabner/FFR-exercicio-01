import React from 'react';
export const Sidebar = (props) => (
	<nav className="sidebar-menu">
		<ul>
			{props.items.map((item) => (
				<li className="sidebar-items">
					<a href={'#' + item.link}>{item.title}</a>
				</li>
			))}
		</ul>
	</nav>
);
