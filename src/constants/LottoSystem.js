const first_winning = { count: 6, hasBonus: false };
const second_winning = { count: 5, hasBonus: true };
const third_winning = { count: 5, hasBonus: false };
const fourth_winning = { count: 4, hasBonus: false };
const fifth_winning = { count: 3, hasBonus: false };

const first_place_prize = 2000000000;
const second_place_prize = 30000000;
const third_place_prize = 1500000;
const fourth_place_prize = 50000;
const fifth_place_prize = 5000;

const LOTTO_SYSTEM = Object.freeze({
	lotto_price: 1000,

	minimum_number: 1,
	maximum_number: 45,
	lotto_numbers: 6,

	winning_array: [fifth_winning, fourth_winning, third_winning, second_winning, first_winning],

	prize_array: [
		fifth_place_prize,
		fourth_place_prize,
		third_place_prize,
		second_place_prize,
		first_place_prize,
	],
});

export default LOTTO_SYSTEM;
