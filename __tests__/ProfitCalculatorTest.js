import ProfitCalculator from '../src/ProfitCalculator';

describe('ProfitCalculator 클래스 테스트', () => {
	test('로또 규칙에 명시된 금액에 맞게 수익률을 계산해야 한다.', async () => {
		// given
		const budget = 8000;
		const winningLottoList = [
			{
				condition: {
					correctCnt: 3,
					bonusCnt: 0,
					winnings: 5000,
				},
				count: 1,
			},
			{
				condition: {
					correctCnt: 4,
					bonusCnt: 0,
					winnings: 50000,
				},
				count: 0,
			},
			{
				condition: {
					correctCnt: 5,
					bonusCnt: 0,
					winnings: 1500000,
				},
				count: 0,
			},
			{
				condition: {
					correctCnt: 5,
					bonusCnt: 1,
					winnings: 30000000,
				},
				count: 0,
			},
			{
				condition: {
					correctCnt: 6,
					bonusCnt: 0,
					winnings: 2000000000,
				},
				count: 0,
			},
		];
		const expectedRate = '62.5%';

		// when
		const calculator = ProfitCalculator;

		// then
		expect(calculator.getProfitRate(budget, winningLottoList)).toEqual(
			expectedRate,
		);
	});
});
