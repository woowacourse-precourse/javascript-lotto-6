import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/Input';

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
			return false;
		}
		return true;
	},
};

describe('Input 클래스 테스트', () => {
	test('판별에 실패했을 경우 다시 질문 받아야 한다.', async () => {
		const input = new Input();

		const spyFn = jest.spyOn(input, 'askUser');

		mockQuestions(['foo', 'foo', 'foo']);

		await input.askUserUntilValid(
			'질문1',
			validator.validateFunc.bind(validator),
		);
		expect(spyFn).toBeCalledTimes(EXPECTED_ASKING_CNT);
	});

	test('판별에 실패했을 경우 에러를 던져야 한다.', () => {
		const input = new Input();
		mockQuestions(['foo', 'foo', 'foo']);
		expect(async () => {
			await input.askUserUntilValid(
				'질문1',
				validator.validateFunc.bind(validator),
			);
		}).toThrow('[ERROR]');
	});
});
