import LottoRules from '../src/LottoRules';

describe('LottoRules 클래스 테스트', () => {
	test('일치하는 개수, 보너스 번호를 입력 받았을 때 올바른 금액을 반환한다.', () => {
		// given
		const newRule = [
			{ correctCnt: 3, bonusCnt: 0, winnings: 5000 },
			{ correctCnt: 5, bonusCnt: 0, winnings: 1500000 },
			{ correctCnt: 6, bonusCnt: 0, winnings: 2000000000 },
			{ correctCnt: 4, bonusCnt: 0, winnings: 50000 },
			{ correctCnt: 5, bonusCnt: 1, winnings: 30000000 },
		];

		// when
		const rules = new LottoRules(newRule);

		// then
		const totalRules = rules.getTotalRule();
		totalRules.forEach((condition, i) => {
			if (i > 0) {
				const currentWinnings =
					condition.getWinningCondition()
						.winnings;
				const prevWinnings =
					totalRules[i - 1].getWinningCondition()
						.winnings;
				expect(currentWinnings > prevWinnings).toBe(true);
			}
		});
	});
});
