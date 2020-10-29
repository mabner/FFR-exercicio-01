import { Component } from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";

export class App extends Component {
	state = {
		menuItems: [
			{ title: 'Google', link: 'https://google.com' },
			{ title: 'Apple', link: 'https://apple.com/br' },
			{ title: 'Microsoft', link: 'https://microsoft.com' },
			{ title: 'PUC Minas', link: 'https://pucminas.br' },
		],
		articles: [
			{
				title: 'Artigo 1',
				text:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Hic ad mollitia doloribus sit, iste quidem.Nostrum delectus blanditiis, explicabo animi voluptatem nam mollitia quia cupiditate aspernatur labore provident incidunt exercitationem?',
			},
			{
				title: 'Artigo 2',
				text:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta natus fugiat minus tenetur repudiandae sunt sapiente itaque nulla beatae expedita nihil mollitia aspernatur recusandae accusamus placeat excepturi consequatur inventore!',
			},
			{
				title: 'Artigo 3',
				text:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus pariatur quis modi, veniam labore? Id, amet asperiores, modi culpa laudantium, animi quasi dolorum error inventore nihil facere eligendi autem.',
			},
		],
	};

	render() {
		return (
			<>
				<header className="main-header">
					<div className="main-logo">
						<h1>Logo</h1>
					</div>

					<div className="header-info">
						<MainMenu />
						<SearchBar />
					</div>
				</header>

				<NavMenu items={this.state.menuItems} />
			</>
		);
	}
}
