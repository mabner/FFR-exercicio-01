import React from 'react';
import { Articles } from './Articles';
export const Sidebar = (props) => (
	<nav className="sidebar-menu">
		<ul>
			{props.items.map((item) => (
				<li>
					<Articles items={this.state.articles} />
					<a href="#{item.title}">{item.title}</a>
				</li>
			))}
		</ul>
	</nav>
);