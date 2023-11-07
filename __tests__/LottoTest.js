import Lotto from '../src/Lotto.js';
import ERROR_MESSAGES from '../src/constants/ErrorMessages.js';

describe('로또 클래스 테스트', () => {
	test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 6, 7]);
		}).toThrow('[ERROR]');
	});

	// TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
	test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4, 5, 5]);
		}).toThrow('[ERROR]');
	});

	// 아래에 추가 테스트 작성 가능
	test('로또 번호의 개수가 6개가 아니면 에러가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 4]);
		}).toThrow(ERROR_MESSAGES.lotto_number_count_not_valid);
	});

	test('로또 번호에 숫자가 아닌 값이 들어가면 에러가 발생한다.', () => {
		expect(() => {
			new Lotto([1, 2, 3, 'a', 5, 6]);
		}).toThrow(ERROR_MESSAGES.value_is_not_digit);
	});

	test('로또 번호 밖의 숫자를 입력하면 에러가 발생한다. (기본 1~45 사이)', () => {
		expect(() => {
			new Lotto([-1, 2, 3, 4, 5, 6]);
		}).toThrow(ERROR_MESSAGES.value_is_not_positive);
	});
});

describe('로또 클래스의 당첨 갯수 테스트', () => {
	test('당첨 0개 보너스 x', () => {
		const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
		const winningNumber = [22, 7, 8, 9, 10, 11];
		const bonusNumber = 12;

		const expectedObject = {
			winningCount: 0,
			bonusNumberHit: false,
		};

		expect(lotto.compareWithWinningNumbers(winningNumber, bonusNumber)).toEqual(expectedObject);
	});

	test('당첨 2개 보너스 x', () => {
		const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
		const winningNumber = [1, 2, 8, 9, 10, 11];
		const bonusNumber = 12;

		const expectedObject = {
			winningCount: 2,
			bonusNumberHit: false,
		};

		expect(lotto.compareWithWinningNumbers(winningNumber, bonusNumber)).toEqual(expectedObject);
	});

	test('당첨 4개 보너스 x', () => {
		const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
		const winningNumber = [22, 7, 1, 2, 3, 4];
		const bonusNumber = 12;

		const expectedObject = {
			winningCount: 4,
			bonusNumberHit: false,
		};

		expect(lotto.compareWithWinningNumbers(winningNumber, bonusNumber)).toEqual(expectedObject);
	});

	test('당첨 5개 보너스 o', () => {
		const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
		const winningNumber = [1, 2, 3, 4, 5, 11];
		const bonusNumber = 6;

		const expectedObject = {
			winningCount: 5,
			bonusNumberHit: true,
		};

		expect(lotto.compareWithWinningNumbers(winningNumber, bonusNumber)).toEqual(expectedObject);
	});
});
