import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';

describe('함수 기능 단위 테스트', () => {
	const ERROR = '[ERROR]';

	describe('App', () => {
		describe('inputMoney', () => {
			test.each(['1000', '11000'])('정상적인 구입금액이 입력됐을 경우', async (input) => {
				Console.readLineAsync = jest.fn().mockResolvedValueOnce(input);
				const result = await App.inputMoney();
				expect(result).toEqual(+input);
			});

			test.each([
				{
					invalid: '1010',
					valid: '1000',
				},
				{
					invalid: '-1',
					valid: '1000',
				},
			])('비정상적인 구입금액이 입력됐을 경우', async ({ invalid, valid }) => {
				Console.readLineAsync = jest.fn().mockResolvedValueOnce(invalid).mockResolvedValueOnce(valid);
				Console.print = jest.fn();

				const result = await App.inputMoney();
				expect(Console.print).toHaveBeenCalledWith(expect.stringContaining(ERROR));
				expect(result).toEqual(+valid);
				expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
			});
		});
		describe('issueLottery', () => {
			test.each([3000, 8000])(
				'(돈 / 1000)개만큼 6개의 숫자가 담긴 로또 번호들이 처음 생각한 개수만큼 출력되었는지 확인',
				(input) => {
					expect(App.issueLottery(input).length).toEqual(+(input / 1000));
				},
			);
		});
	});
});
