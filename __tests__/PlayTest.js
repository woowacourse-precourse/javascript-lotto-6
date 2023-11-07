import App from '../src/App.js';
import { Console } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
	Console.readLineAsync = jest.fn();

	Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

describe('로또 동작 테스트', () => {
	describe('로또 구입 금액 입력 테스트', () => {
		// success
		test.each([
			// given
			['8000', 8],
			['2000', 2],
			['4000', 4],
		])('%s원 입력시, %s개의 로또 번호가 생성된다.', (value, expected) => {
			// when
			const app = new App();
			app.initialUserLotto(value);

			// then
			expect(app.userLottoSheet.length).toBe(expected);
		});

		// error
		test('숫자가 아닌 구입금액이 입력된 경우 에러를 띄운다.', async () => {
			// given
			const INPUT_NUMBERS_TO_END = ['1000j'];
			mockQuestions([...INPUT_NUMBERS_TO_END]);

			// when
			const app = new App();

			// then
			await expect(app.play()).rejects.toThrow('[ERROR]');
		});

		test('단위 로또 가격으로 구입이 불가능한 경우 에러를 띄운다.', async () => {
			// given
			const INPUT_NUMBERS_TO_END = ['1100'];
			mockQuestions([...INPUT_NUMBERS_TO_END]);

			// when
			const app = new App();

			// then
			await expect(app.play()).rejects.toThrow('[ERROR]');
		});
	});
});
