import { Component } from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Articles } from "./components/Articles";

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
				link: 'artigo1',
				title: 'Artigo 1',
				text:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maxime cum quasi, veritatis voluptate ex ipsa eius nemo nihil, nesciunt sed repudiandae. Ducimus vel, neque sed tenetur nemo voluptas quod necessitatibus eos eveniet debitis nam at repudiandae perspiciatis recusandae adipisci minima aliquam alias suscipit quo cumque qui culpa maiores corrupti? Quod, sint numquam. Debitis est velit animi aliquid sunt amet.',
			},
			{
				link: 'artigo2',
				title: 'Artigo 2',
				text:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos nam dolor maxime provident similique odit impedit sint quia corrupti cupiditate, et doloremque. Praesentium hic, neque voluptatem, aperiam placeat distinctio repellendus, porro qui facere velit quasi! Doloremque tempora ea, a repudiandae cupiditate in asperiores eaque doloribus nemo dolorem exercitationem perspiciatis, fuga obcaecati iusto ducimus corrupti quaerat illo accusamus! Harum, ad.',
			},
			{
				link: 'artigo3',
				title: 'Artigo 3',
				text:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam quasi asperiores, officiis vel, illo, dolor autem quia ullam consectetur accusantium et illum? Earum eligendi omnis consequuntur tenetur nostrum doloremque deserunt officiis beatae corporis atque at tempore iusto facilis aperiam enim quaerat excepturi soluta, reprehenderit quisquam delectus! Cumque explicabo dignissimos eos voluptatum commodi. Corporis possimus optio asperiores deserunt dolore vero.',
			},
			{
				link: 'artigo4',
				title: 'Artigo 4',
				text:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate temporibus eaque quisquam facere nesciunt voluptatem! Nisi aut eligendi pariatur velit ipsum et recusandae accusantium quasi voluptatibus optio molestias enim asperiores ut totam praesentium, incidunt labore aliquam esse eos tempore quas cum quibusdam ab accusamus! In, quod magnam itaque et velit molestiae. Amet hic at esse eveniet voluptatem qui distinctio.',
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

				<Sidebar items={this.state.articles} />

				<div className="main-body">
					<Articles items={this.state.articles} />
				</div>
			</>
		);
	}
}
