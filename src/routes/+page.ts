import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(
		'https://api.openf1.org/v1/laps?session_key=9955&driver_number=4&lap_number=1'
	);
	const response = await res.json();
	console.log(response);

	const { duration_sector_1, duration_sector_2, duration_sector_3, lap_duration, st_speed } =
		response[0];

	return {
		duration_sector_1,
		duration_sector_2,
		duration_sector_3,
		lap_duration,
		st_speed
	};
};
