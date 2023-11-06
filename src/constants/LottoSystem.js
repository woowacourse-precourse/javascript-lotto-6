const LOTTO_SYSTEM = Object.freeze({
	lotto_price: 1000,

	minimum_number: 1,
	maximum_number: 45,
	lotto_numbers: 6,

	first_winning: [6, false],
	second_winning: [5, true],
	third_winning: [5, false],
	fourth_winning: [4, false],
	fifth_winning: [3, false],

	first_place_prize: 2000000000,
	second_place_prize: 30000000,
	third_place_prize: 1500000,
	fourth_place_prize: 50000,
	fifth_place_prize: 5000,
});

export default LOTTO_SYSTEM;
