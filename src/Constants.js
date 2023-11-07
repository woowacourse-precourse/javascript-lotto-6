export const DECICMAL_NUMBER = 10;
export const WINNING_RULES = [
	{ match: 3, prize: '5,000원', prizeNumber: 5000 },
	{ match: 4, prize: '50,000원', prizeNumber: 50000 },
	{ match: 5, prize: '1,500,000원', prizeNumber: 1500000 },
	{
		match: 5,
		bonus: true,
		prize: '30,000,000원',
		bonusText: ', 보너스 볼 일치',
		prizeNumber: 30000000,
	},
	{ match: 6, prize: '2,000,000,000원', prizeNumber: 2000000000 },
];

export const LOTTO = {
	PRICE: 1000,
	NUMBER_COUNT: 6,
	NUMBER_START: 1,
	NUMBER_LAST: 45,
};
