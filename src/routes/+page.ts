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

	const conRes = await fetch('http://api.jolpi.ca/ergast/f1/2025/constructorstandings/');
	const conResponse = await conRes.json();

	const constructorsStandings =
		conResponse.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
	const topCons = constructorsStandings.find((ds: { position: string }) => ds.position === '1');
	const secondCons = constructorsStandings.find((ds: { position: string }) => ds.position === '2');
	const thirdCons = constructorsStandings.find((ds: { position: string }) => ds.position === '3');
	const fourthCons = constructorsStandings.find((ds: { position: string }) => ds.position === '4');
	const fifthCons = constructorsStandings.find((ds: { position: string }) => ds.position === '5');
	const maxConsPoints = topCons.points;

	console.log({ topCons });
	return {
		driverStandings,
		maxPoints,
		topDriver,
		secondDriver,
		thirdDriver,
		fourthDriver,
		fifthDriver,
		constructorsStandings,
		topCons,
		secondCons,
		thirdCons,
		fourthCons,
		fifthCons,
		maxConsPoints
	};
};
