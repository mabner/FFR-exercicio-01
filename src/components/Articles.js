import React from 'react';

export const Articles = (props) => (
	<div className="main-body">
		{props.items.map((item) => (
			<div className="article-body">
				<p className="article-title" id={item.title}>
					{item.title}
				</p>
				<p>{item.text}</p>
			</div>
		))}
	</div>
);
