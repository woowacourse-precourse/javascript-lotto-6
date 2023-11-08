import LottoCycle from '../src/Models/LottoCycle';

describe('Lotto 사이클 테스트', () => {
	test.each([
		[[1, 2, 3, 4, 5, 6], 1],
		[[1, 2, 3, 4, 5, 7], 2],
		[[1, 2, 3, 4, 5, 8], 3],
		[[1, 2, 3, 4, 8, 9], 4],
		[[1, 2, 3, 8, 9, 19], 5],
	])('%s는 %s등이다.', (lottoNumber, rank) => {
		// given
		const purchaseCost = 1000;
		const userLottos = [lottoNumber];
		const winnerLotto = [1, 2, 3, 4, 5, 6];
		const bonusLotto = 7;
		const scoreCount = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
		};

		// when
		const lottoCycle = new LottoCycle({ purchaseCost, userLottos, winnerLotto, bonusLotto });
		lottoCycle.checkLottosRank(lottoNumber);
		scoreCount[rank] += 1;

		// then
		expect(lottoCycle.scoreCount).toEqual(scoreCount);
	});

	test('수익률을 계산할 수 있다.', () => {
		// given
		const purchaseCost = 14000;
		const winnerLotto = [1, 2, 3, 4, 5, 6];
		const bonusLotto = 7;
		const userLottos = [
			[1, 2, 3, 9, 10, 20], // 5등
			[4, 5, 6, 9, 12, 13], // 5등
			[6, 7, 8, 9, 13, 14], // 여기서부터 꽝
			[6, 7, 8, 9, 14, 15],
			[6, 7, 8, 9, 15, 16],
			[6, 7, 8, 9, 16, 17],
			[6, 7, 8, 9, 17, 18],
			[6, 7, 8, 9, 18, 19],
			[6, 7, 8, 9, 19, 20],
			[6, 7, 8, 9, 20, 21],
			[6, 7, 8, 9, 21, 22],
			[6, 7, 8, 9, 22, 23],
			[6, 7, 8, 9, 23, 24],
			[6, 7, 8, 9, 24, 25],
		];

		// when
		const lottoCycle = new LottoCycle({ purchaseCost, userLottos, winnerLotto, bonusLotto });
		lottoCycle.checkLottosRank();

		// then
		expect(lottoCycle.calculateEarnRate()).toBe('71.4');
	});
});
