import { useState } from "react";
import styles from "./home.module.css";

import githubIcon from "../../assets/icons/github.png";
import pokemonIcon from "../../assets/icons/pokemon.png";
import weatherIcon from "../../assets/icons/weather.png";
import jsonIcon from "../../assets/icons/json.png";
import unsplashIcon from "../../assets/icons/unsplash.png";
import rickmortyIcon from "../../assets/icons/rickmorty.png";

export default function Home() {
	const [selectedApi, setSelectedApi] = useState(null);

	const apis = [
		{
			id: "jsonplaceholder",
			name: "JSONPlaceholder",
			emoji: jsonIcon,
			deploy: "link",
			description:
				"Posts, usuários, comentários fake. Perfeita para iniciantes sem complicações.",
			difficulty: "Iniciante",
			auth: "Nenhuma",
			rate: "Sem limite",
			url: "https://jsonplaceholder.typicode.com",
			endpoint: "/posts (ou /users, /comments, /todos)",
			cases: [
				"Listar posts com loading + erro",
				"Buscar usuário por ID",
				"Criar/editar post (simulado)",
				"Exercitar AbortController",
			],
			response: {
				userId: 1,
				id: 1,
				title: "sunt aut facere repellat provident",
				body: "quia et suscipit...",
			},
		},
		{
			id: "openweather",
			name: "OpenWeatherMap",
			emoji: weatherIcon,
			description:
				"Dados de clima em tempo real. Requer chave de API (gratuita).",
			difficulty: "Intermediário",
			auth: "API Key obrigatória",
			rate: "60 req/min (free)",
			url: "https://api.openweathermap.org/data/2.5",
			endpoint: "/weather?q=london&appid=YOUR_KEY",
			cases: [
				"Buscar clima por cidade",
				"Lidar com erros (cidade não encontrada)",
				"Formatar dados e exibir temperatura",
				"Exercitar requisições com parâmetros",
			],
			response: {
				name: "London",
				sys: { country: "GB" },
				main: { temp: 288.15, humidity: 72 },
				weather: [{ main: "Clouds", description: "overcast clouds" }],
			},
		},
		{
			id: "pokemon",
			name: "Pokémon API",
			emoji: pokemonIcon,
			description:
				"Dados de pokémons, movimentos, tipos. Resposta estruturada.",
			difficulty: "Intermediário",
			auth: "Nenhuma",
			rate: "Sem limite",
			url: "https://pokeapi.co/api/v2",
			endpoint: "/pokemon/ditto (ou /pokemon?limit=20&offset=0)",
			cases: [
				"Listar pokémons com paginação",
				"Buscar detalhes de um pokémon",
				"Tratar dados aninhados (abilities)",
				"Exercitar promises encadeadas",
			],
			response: {
				id: 132,
				name: "ditto",
				height: 3,
				weight: 40,
				types: [{ type: { name: "normal" } }],
				abilities: [{ ability: { name: "imposter" } }],
			},
		},
		{
			id: "github",
			name: "GitHub API",
			emoji: githubIcon,
			description:
				"Repositórios, usuários, issues. Sem autenticação tem limite baixo.",
			difficulty: "Intermediário",
			auth: "Opcional (sem = 60 req/h)",
			rate: "60 req/h (sem auth)",
			url: "https://api.github.com",
			endpoint: "/repos/facebook/react (ou /search/repositories)",
			cases: [
				"Buscar repositório por nome",
				"Exibir linguagens, stars, forks",
				"Tratar rate limit (X-RateLimit headers)",
				"Manipular dados paginados",
			],
			response: {
				name: "react",
				full_name: "facebook/react",
				stargazers_count: 215000,
				forks_count: 44000,
				language: "JavaScript",
				description: "A JavaScript library...",
			},
		},
		{
			id: "unsplash",
			name: "Unsplash API",
			emoji: unsplashIcon,
			description: "Imagens grátis de alta qualidade. Requer chave de API.",
			difficulty: "Avançado",
			auth: "API Key obrigatória",
			rate: "50 req/h (free)",
			url: "https://api.unsplash.com",
			endpoint: "/photos?client_id=YOUR_KEY",
			cases: [
				"Listar imagens com galeria",
				"Buscar imagens por palavra-chave",
				"Renderizar imagens otimizadas",
				"Tratar CORS e headers customizados",
			],
			response: {
				id: "abc123",
				description: "Mountain landscape",
				urls: { regular: "https://...", thumb: "https://..." },
				user: { name: "John Doe" },
				likes: 250,
			},
		},
		{
			id: "rickmorty",
			name: "Rick & Morty API",
			emoji: rickmortyIcon,
			description:
				"Personagens, episódios, locais da série. Dados bem estruturados.",
			difficulty: "Intermediário",
			auth: "Nenhuma",
			rate: "Sem limite",
			url: "https://rickandmortyapi.com/api",
			endpoint: "/character (ou /episode, /location)",
			cases: [
				"Listar personagens com filtros",
				"Buscar por nome e status",
				"Exibir episódios de um personagem",
				"Exercitar múltiplas requisições em paralelo",
			],
			response: {
				id: 1,
				name: "Rick Sanchez",
				status: "alive",
				species: "Human",
				image: "https://...",
				episode: ["https://...episode/1"],
			},
		},
	];

	const getDifficultyColor = (difficulty) => {
		switch (difficulty) {
			case "Iniciante":
				return styles.difficultyBeginner;
			case "Intermediário":
				return styles.difficultyIntermediate;
			case "Avançado":
				return styles.difficultyAdvanced;
			default:
				return "";
		}
	};

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
	};

	if (selectedApi) {
		const api = apis.find((a) => a.id === selectedApi);

		return (
			<div className={styles.container}>
				<button
					className={styles.backButton}
					onClick={() => setSelectedApi(null)}
				>
					← Voltar
				</button>

				<div className={styles.detailCard}>
					<div className={styles.detailHeader}>
						<div>
							<h1 className={styles.detailTitle}>{api.name}</h1>
							<p className={styles.detailDescription}>{api.description}</p>
							<div className={styles.detailFooter}>
								<button className={styles.detailBtn}>
									{api.deploy}
									<span>- /</span>
								</button>
							</div>
						</div>
						<span className={styles.detailEmoji}>{api.emoji}</span>
					</div>

					<div className={styles.statsGrid}>
						<div className={styles.statItem}>
							<span className={styles.statLabel}>Dificuldade</span>
							<span
								className={`${styles.statValue} ${getDifficultyColor(api.difficulty)}`}
							>
								{api.difficulty}
							</span>
						</div>
						<div className={styles.statItem}>
							<span className={styles.statLabel}>Autenticação</span>
							<span className={styles.statValue}>{api.auth}</span>
						</div>
						<div className={styles.statItem}>
							<span className={styles.statLabel}>Limite de Taxa</span>
							<span className={styles.statValue}>{api.rate}</span>
						</div>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>URL Base</h3>
						<div className={styles.codeBlock}>
							<code>{api.url}</code>
							<button
								className={styles.copyButton}
								onClick={() => {
									copyToClipboard(api.url);
									alert("URL copiada!");
								}}
								title="Copiar"
							>
								📋
							</button>
						</div>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>Exemplo de Endpoint</h3>
						<div className={styles.codeBlock}>
							<code>{api.endpoint}</code>
							<button
								className={styles.copyButton}
								onClick={() => {
									copyToClipboard(api.endpoint);
									alert("Endpoint copiado!");
								}}
								title="Copiar"
							>
								📋
							</button>
						</div>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>Casos de Uso no Lab</h3>
						<ul className={styles.casesList}>
							{api.cases.map((caseItem, idx) => (
								<li key={idx}>
									<span className={styles.caseIcon}>→</span>
									{caseItem}
								</li>
							))}
						</ul>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>Resposta Típica</h3>
						<pre className={styles.responseBlock}>
							{JSON.stringify(api.response, null, 2)}
						</pre>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>API Lab</h1>
				<p className={styles.subtitle}>
					Escolha uma API para explorar. Um ambiente dedicado ao domínio de
					estruturas de dados, fluxos de requisição e gerenciamento de estado
				</p>
			</div>

			<div className={styles.grid}>
				{apis.map((api) => (
					<div
						key={api.id}
						className={styles.card}
						onClick={() => setSelectedApi(api.id)}
					>
						<div className={styles.cardHeader}>
							<img
								src={api.emoji}
								alt={api.name}
								className={styles.cardEmoji}
							/>
							<span
								className={`${styles.cardBadge} ${getDifficultyColor(api.difficulty)}`}
							>
								{api.difficulty.split(" ")[0]}
							</span>
						</div>

						<h2 className={styles.cardTitle}>{api.name}</h2>
						<p className={styles.cardDescription}>{api.description}</p>

						<div className={styles.cardFooter}>
							<span className={styles.cardMeta}>🔐 {api.auth}</span>
							<span className={styles.cardMeta}>⚡ {api.rate}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
