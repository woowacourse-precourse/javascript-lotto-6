import LOTTO_SYSTEM from '../src/constants/LottoSystem';
import BudgetManager from '../src/models/BudgetManager';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 금액 관리자 테스트', () => {
	test('로또 구매 테스트', () => {
		const budgetManager = new BudgetManager('50000');

		expect(budgetManager.buyingLottos()).toBe(50);
	});

	test.each([
		[3, false, 4],
		[4, true, 3],
		[4, false, 3],
		[5, false, 2],
		[5, true, 1],
		[6, false, 0],
	])('로또 당첨결과 테스트', (winningCount, bonusNumberHit, rank) => {
		const budgetManager = new BudgetManager('50000');

		const lottoResults = {
			winningCount,
			bonusNumberHit,
		};

		const result = budgetManager.calculateLotteryResults([lottoResults]);
		expect(result[0]).toEqual(rank);
	});

	test('로또 결과 수익률 계산 테스트', () => {
		const randomNumbers = [1, 2, 3, 4, 5, 6];
		mockRandoms([randomNumbers]);

		const budgetManager = new BudgetManager('1000');
		budgetManager.buyingLottos();

		const lottoResult = {
			winningCount: 3,
			bonusNumberHit: false,
		};

		budgetManager.calculateLotteryResults([lottoResult]);
		expect(budgetManager.calculateTotalReturn()).toBe(500);
	});

	test('로또 결과 수익률 계산 테스트', () => {
		const randomNumbers = [1, 2, 3, 4, 5, 6];
		mockRandoms([randomNumbers]);

		const budgetManager = new BudgetManager('5000');
		budgetManager.buyingLottos();

		const lottoResult = {
			winningCount: 5,
			bonusNumberHit: false,
		};

		budgetManager.calculateLotteryResults([lottoResult]);
		expect(budgetManager.calculateTotalReturn()).toBe(30000);
	});

	test('로또 결과 수익률 계산 테스트', () => {
		const randomNumbers = [1, 2, 3, 4, 5, 6];
		mockRandoms([randomNumbers]);

		const budgetManager = new BudgetManager('10000');
		budgetManager.buyingLottos();

		const lottoResult = {
			winningCount: 6,
			bonusNumberHit: false,
		};

		budgetManager.calculateLotteryResults([lottoResult]);
		expect(budgetManager.calculateTotalReturn()).toBe(20000000);
	});
});
