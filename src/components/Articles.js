import React from 'react';

export const Articles = (props) => (
	<div className="main-body">
		{props.items.map((item) => (
			<div className="article-body">
				<p className="article-title" id={item.link}>
					{item.title}
				</p>
				<p className="article-text">{item.text}</p>
			</div>
		))}
	</div>
);
