import { useLocation } from 'preact-iso';
import getName from '../logic/nameGenerator';
import { useEffect } from 'preact/hooks';
import generateCharacter from '../logic/characterGenerator';

const getData = async () => {
	console.log("Data");
	try {
		const respRoles = await fetch("roles.json");
		if (!respRoles.ok) {
			return;
		}
		const roles = await respRoles.json();
		const respTrait = await fetch("traits.json");
		if (!respTrait.ok) {
			return;
		}
		const traits = await respTrait.json();
		console.log(generateCharacter(roles, traits));
	} catch (e) {
		console.log(e);

	}
}

export function Header() {
	const { url } = useLocation();
	useEffect(() => {
		getData();
	}, []);
	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					{getName()}
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
