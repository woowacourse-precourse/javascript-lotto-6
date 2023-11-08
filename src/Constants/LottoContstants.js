const LOTTO_CONSTANTS = Object.freeze({
	standartLottoCost: 1000,
	lottoNumberCount: 6,
	maxLottoNumber: 45,
	minLottoNumber: 1,
});

const LOTTO_RANK_STANDARD = Object.freeze({
	1: 6,
	2: 5,
	3: 5,
	4: 4,
	5: 3,
});

const LOTTO_REWARD_CONSTANTS = Object.freeze({
	1: 2000000000,
	2: 30000000,
	3: 1500000,
	4: 50000,
	5: 5000,
});

const DEFAULT_CONSTANT = Object.freeze({
	splitStandardText: ',',
});

export { LOTTO_CONSTANTS, LOTTO_RANK_STANDARD, LOTTO_REWARD_CONSTANTS, DEFAULT_CONSTANT };
