import React from 'react';

export const Articles = (props) => (
	<div className="main-body">
		{props.items.map((item) => (
			<div className="article-body">
				<div className="article-items">
					<img src="articles.jpg" alt="News Paper" />
					<span className="imageText">
						Photo by{' '}
						<a href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
							Annie Spratt
						</a>{' '}
						on{' '}
						<a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
							Unsplash
						</a>
					</span>
				</div>
				<div className="article-items">
					<p className="article-title" id={item.link}>
						{item.title}
					</p>
					<p className="article-text">{item.text}</p>
				</div>
			</div>
		))}
	</div>
);
