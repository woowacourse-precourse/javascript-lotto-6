import BonusNumberValidator from '../../../src/validator/BonusNumberValidator.js';
import errorMessage from '../../../src/constants/errorMessage';

describe('BonusNumberValidator 테스트', () => {
	test('숫자가 아닌 문자열이 입력되었을 때 에러', () => {
		const bonusNumber = 'A';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.NOT_NUMBER);
	});

	test('1보다 작은 숫자가 들어갈 때', () => {
		const bonusNumber = '-2';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.OUT_OF_RANGE);
	});

	test('45보다 큰 숫자가 들어갈 때', () => {
		const bonusNumber = '46';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.OUT_OF_RANGE);
	});

	test('빈칸이 들어갈 때', () => {
		const bonusNumber = '';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.OUT_OF_RANGE);
	});

	test('소수가 들어갈 때', () => {
		const bonusNumber = '1.2';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.NOT_NATURAL_NUMBER);
	});

	test('이미 당첨번호로 뽑힌 수가 들어갈 때', () => {
		const bonusNumber = '1';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.ALREADY_PICKED_NUMBER);
	});

	test('10.0이 들어갈 때', () => {
		const bonusNumber = '10.0';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('+45가 들어갈 때', () => {
		const bonusNumber = '+45';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('09가 들어갈 때', () => {
		const bonusNumber = '09';
		expect(() => BonusNumberValidator.validate(bonusNumber, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage.UNUSUAL_INPUT);
	});
});