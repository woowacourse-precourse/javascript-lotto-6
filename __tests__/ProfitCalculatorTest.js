import ProfitCalculator from '../src/ProfitCalculator';
import WinningCondition from '../src/WinningCondition';

describe('ProfitCalculator 클래스 테스트', () => {
	test('로또 규칙에 명시된 금액에 맞게 수익률을 계산해야 한다.', async () => {
		// given
		const budget = 8000;
		const purchaseResult = [
			{
				condition: new WinningCondition({
					correctCnt: 3,
					bonusCnt: 0,
					winnings: 5000,
				}),
				count: 1,
			},
			{
				condition: new WinningCondition({
					correctCnt: 4,
					bonusCnt: 0,
					winnings: 50000,
				}),
				count: 0,
			},
			{
				condition: new WinningCondition({
					correctCnt: 5,
					bonusCnt: 0,
					winnings: 1500000,
				}),
				count: 0,
			},
		];
		const expectedRate = '62.5%';

		// when
		const calculator = ProfitCalculator;

		// then
		expect(calculator.getProfitRate(budget, purchaseResult)).toEqual(
			expectedRate,
		);
	});
});
