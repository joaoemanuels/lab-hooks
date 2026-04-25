import { BrowserRouter, Route, Routes } from "react-router";
import Pokemon from "../page/Pokemon";
import Home from "../page/Home";
import JsonPlaceholder from "../page/JsonPlaceholder";
import Unsplash from "../page/Unsplash";
import GitHub from "../page/Github";
import RickAndMorty from "../page/RickAndMorty";
import Weather from "../page/Weather";
import NotFound from "../page/NotFound";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/github" element={<GitHub />} />
				<Route path="/jsonplaceholder" element={<JsonPlaceholder />} />
				<Route path="/pokemon" element={<Pokemon />} />
				<Route path="/pokemon" element={<RickAndMorty />} />
				<Route path="/unsplash" element={<Unsplash />} />
				<Route path="/pokemon" element={<Weather />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
