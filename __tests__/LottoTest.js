import { ERROR_MESSAGE } from '../src/Constants/MessageConstants.js';
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
	test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 6, 7]);
		}).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	// TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
	test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 5]);
		}).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	test('로또 번호 중에 문자가 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 'k'];

		// when, then
		expect(() => new Lotto(lottoNumber)).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	test('로또 번호 중에 음수가 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, -1];

		// when, then
		expect(() => new Lotto(lottoNumber)).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	test('로또 번호 중에 소수가 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 0.1];

		// when, then
		expect(() => new Lotto(lottoNumber)).toThrow('[ERROR]');
	});

	test('로또 번호 중에 0이 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 0];

		// when, then
		expect(() => new Lotto(lottoNumber)).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	test('로또 번호 중에 로또 번호 범위를 벗어나는 값이 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 56];

		// when, then
		expect(() => new Lotto(lottoNumber)).toThrow(ERROR_MESSAGE.errorPrefix);
	});

	test('Lotto 인스턴스가 생성된다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 6];

		// when
		const lotto = new Lotto(lottoNumber);

		// then
		expect(lotto).toBeInstanceOf(Lotto);
		expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
