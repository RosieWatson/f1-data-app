import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://api.jolpi.ca/ergast/f1/2025/driverstandings/?format=json');
	const response = await res.json();

	const driverStandings = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	const topDriver = driverStandings.find((ds: { position: string }) => ds.position === '1');
	const secondDriver = driverStandings.find((ds: { position: string }) => ds.position === '2');
	const thirdDriver = driverStandings.find((ds: { position: string }) => ds.position === '3');
	const fourthDriver = driverStandings.find((ds: { position: string }) => ds.position === '4');
	const fifthDriver = driverStandings.find((ds: { position: string }) => ds.position === '5');
	const maxPoints = topDriver.points;

	return {
		driverStandings,
		maxPoints,
		topDriver,
		secondDriver,
		thirdDriver,
		fourthDriver,
		fifthDriver
	};
};
