import { MissionUtils } from '@woowacourse/mission-utils';
import LottoCompany from '../../src/LottoCompany';
import errorMessage from '../../src/constants/errorMessage';

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

describe('LottoCompany 테스트', () => {
	test('operate 테스트', async () => {
		// given
		const logSpy = getLogSpy();

		mockRandoms([
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 14, 15, 16],
		]);

		mockQuestions(['1111', '2000', '1,2,3,4,5', '1,2,3,4,5,6', '6', '7']);

		// when
		const lottoCompany = new LottoCompany();
		await lottoCompany.operate();

		// then
		const logs = [
			errorMessage.INVALID_PURCHASE_AMOUNT,
			'',
			'2개를 구매했습니다.',
			'[1, 2, 3, 4, 5, 6]',
			'[1, 2, 3, 14, 15, 16]',
			'',
			errorMessage.NOT_SIX_COUNT,
			'',
			errorMessage.ALREADY_PICKED_NUMBER,
			'',
			'당첨 통계\n---',
			'3개 일치 (5,000원) - 1개',
			'4개 일치 (50,000원) - 0개',
			'5개 일치 (1,500,000원) - 0개',
			'5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
			'6개 일치 (2,000,000,000원) - 1개',
			'총 수익률은 100,000,250.0%입니다.',
		];

		logs.forEach((log, index) => {
			expect(logSpy.mock.calls[index][0]).toEqual(log);
		});
	});
});