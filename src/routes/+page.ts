import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch('https://api.jolpi.ca/ergast/f1/2025/driverstandings/?format=json');
	const response = await res.json();

	const driverStandings = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	const maxPoints = driverStandings.find((ds: { position: string }) => ds.position === '1').points;

	return { driverStandings, maxPoints };
};
