import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';

const EXPECTED_ASKING_CNT = 2;

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

const validator = {
	runCnt: 1,
	validateFunc() {
		if (this.runCnt < EXPECTED_ASKING_CNT) {
			this.runCnt += 1;
			throw new Error('[Error]');
		}
		return true;
	},
};

describe('Input 클래스 테스트', () => {
	test('판별에 실패했을 경우 다시 질문 받아야 한다.', async () => {
		// given
		mockQuestions(['foo', 'foo', 'foo']);

		// when

		const spyFn = jest.spyOn(validator, 'validateFunc');

		await Input.askUserUntilValid(
			'질문1',
			validator.validateFunc.bind(validator),
		);

		// then
		expect(spyFn).toBeCalledTimes(EXPECTED_ASKING_CNT);
	});
});
