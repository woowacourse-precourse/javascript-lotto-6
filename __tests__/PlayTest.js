import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';
import LottoCycle from '../src/Models/LottoCycle.js';

const mockQuestions = (inputs) => {
	Console.readLineAsync = jest.fn();

	Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, Random.pickUniqueNumbersInRange);
};

describe('로또 동작 테스트', () => {
	beforeEach(() => {
		jest.restoreAllMocks();
	});

	test('로또 구입 금액, 로또 번호, 보너스 번호 입력시, LottoCycle 인스턴스가 생성된다.', async () => {
		// given
		const settedRandomNumbers = [
			[8, 21, 23, 41, 42, 43],
			[3, 5, 11, 16, 32, 38],
			[7, 11, 16, 35, 36, 44],
			[1, 8, 11, 31, 41, 42],
			[13, 14, 16, 38, 42, 45],
			[7, 11, 30, 40, 42, 43],
			[2, 13, 22, 32, 38, 45],
			[1, 3, 5, 14, 22, 45],
		];

		mockRandoms(settedRandomNumbers);
		mockQuestions(['8000', '1,2,3,4,5,6', '7']);

		// when
		const app = new App();
		await app.play();

		// then
		expect(app.lottoCycle).toBeInstanceOf(LottoCycle);
		expect(app.lottoCycle.purchaseCost).toBe('8000');
		expect(app.lottoCycle.userLottos).toEqual(settedRandomNumbers);
		expect(app.lottoCycle.winnerLotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
		expect(app.lottoCycle.bonusLotto.bonusNumber).toBe(7);
	});
});
