import LottoBuyer from '../../../src/LottoBuyer';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoBuyer 테스트', () => {
	test('입력한 금액이 프로퍼티에 저장이 됐는지 테스트', () => {
		const purchaseAmount = 8000;
		const lottoBuyer = new LottoBuyer(purchaseAmount);

		expect(lottoBuyer.getPurchaseAmount()).toEqual(purchaseAmount);
	});

	test('입력한 금액 만큼의 로또가 발급되는지 테스트', () => {
		const purchaseAmount = 8000;
		const lottoBuyer = new LottoBuyer(purchaseAmount);

		const expectedResult = Number.parseInt(purchaseAmount/1000);

		expect(lottoBuyer.getAllLottoNumberArray().length).toEqual(expectedResult);
	});

	test('발행한 로또의 결과 테스트(1, 2, 3등)', () => {
		// when
		mockRandoms([
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 16],
			[1, 2, 3, 4, 5, 7],
			[11, 12, 13, 14, 15, 16]
		]);

		// given
		const purchaseAmount = 4000;
		const lottoBuyer = new LottoBuyer(purchaseAmount);
		const winningNumberArray = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;
		
		// then
		const expectedResult = {
			firstPlaceCount: 1,
			secondPlaceCount: 1,
			thirdPlaceCount: 1,
			fourthPlaceCount: 0,
			fifthPlaceCount: 0,
		};

		expect(lottoBuyer.checkResult(winningNumberArray, bonusNumber)).toEqual(expectedResult);
	});

	test('발행한 로또의 결과 테스트(4, 5등)', () => {
		// when
		mockRandoms([
			[1, 2, 3, 14, 15, 16],
			[1, 2, 3, 4, 15, 16],
			[1, 2, 3, 4, 15, 17],
			[11, 12, 13, 14, 15, 16]
		]);

		// given
		const purchaseAmount = 4000;
		const lottoBuyer = new LottoBuyer(purchaseAmount);
		const winningNumberArray = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;
		
		// then
		const expectedResult = {
			firstPlaceCount: 0,
			secondPlaceCount: 0,
			thirdPlaceCount: 0,
			fourthPlaceCount: 2,
			fifthPlaceCount: 1,
		};

		expect(lottoBuyer.checkResult(winningNumberArray, bonusNumber)).toEqual(expectedResult);
	});
});