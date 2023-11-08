import Validator from '../src/Validator';

describe('Validator 클래스 테스트', () => {
	test('금액은 10진법으로 표현된 자연수여야 한다.', () => {
		// given
		const strExample = ['a', '10', '-10', '0.0314E+2', '010'];
		const expectedValidity = [false, true, false, false, false];

		// when
		const validator = Validator;

		// then
		strExample.forEach((str, i) => {
			if (!expectedValidity[i]) {
				expect(() =>
					validator.checkBudgetValidity(str),
				).toThrow('[ERROR]');
			}
		});
	});

	test('금액은 1000의 배수여야 한다.', () => {
		// given
		const strExample = ['1200', '14000', '-1000', '1020001'];
		const expectedValidity = [false, true, false, false];
		// 로또의 가격은 1000으로 한다.

		// when
		const validator = Validator;

		// then
		strExample.forEach((str, i) => {
			if (!expectedValidity[i]) {
				expect(() =>
					validator.checkBudgetValidity(str),
				).toThrow('[ERROR]');
			}
		});
	});

	test('당첨 번호는 ,로 나눴을 때 중복되지 않는 6개의 숫자로 이루어져 있어야 한다.', () => {
		// given
		const strExample = [
			'1,2,3,4,5,6,7',
			'1,2,3,4,5,6',
			'1,2,3,3,4,5,6',
			'3,3,3,3,3,3',
		];
		const expectedValidity = [false, true, false, false];
		// 당첨번호의 개수는 6개로 한다.

		// when
		const validator = Validator;

		// then
		strExample.forEach((str, i) => {
			if (!expectedValidity[i]) {
				expect(() =>
					validator.checkWinningNumberValidity(
						str,
					),
				).toThrow('[ERROR]');
			}
		});
	});

	test('각각의 번호는 1~45 사이의 숫자여야 한다.', () => {
		// given
		const strExample = ['a,1,2,3,4,5', '1,2,3,4,5,6', '1,2,3,4,48,5,'];
		const expectedValidity = [false, true, false];
		// 허용되는 숫자의 범위는 1~45로 한다.

		// when
		const validator = Validator;

		// then
		strExample.forEach((str, i) => {
			if (!expectedValidity[i]) {
				expect(() =>
					validator.checkWinningNumberValidity(
						str,
					),
				).toThrow('[ERROR]');
			}
		});
	});

	test('보너스 번호는 자연수여야 한다.', () => {
		// given
		const strExample = ['a', '10', '-10', '0.0314E+2', '010'];
		const expectedValidity = [false, true, false, false, false];

		// when
		const validator = Validator;

		// then
		strExample.forEach((str, i) => {
			if (!expectedValidity[i]) {
				expect(() =>
					validator.checkBonusNumberCondition(
						str,
					),
				).toThrow('[ERROR]');
			}
		});
	});
});
