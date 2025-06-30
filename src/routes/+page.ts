import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const sessionId = 9955; // Hardcode to Austria 2025
	const driverNumber = 4; // Hardcode to Lando Norris
	const noLaps = 71; // Hardcode to Austria laps

	let laps: any[] = [];

	for (let i = 1; i <= noLaps / 3; i++) {
		const res = await fetch(
			`https://api.openf1.org/v1/laps?session_key=${sessionId}&driver_number=${driverNumber}&lap_number=${i}`
		);
		const response = await res.json();

		laps = [...laps, response[0]];
	}

	return {
		laps
	};
};
