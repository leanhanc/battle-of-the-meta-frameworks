import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

// Local Stylesheet
import reset from "../app/styles/reset.css";
import global from "../app/styles/app.css";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Visit Argentina",
	viewport: "width=device-width,initial-scale=1",
	description: "This is a fake site part of a technical experiment",
});

export function links(): ReturnType<LinksFunction> {
	return [
		{
			rel: "stylesheet",
			href: reset,
		},
		{
			rel: "stylesheet",
			href: global,
		},
	];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
