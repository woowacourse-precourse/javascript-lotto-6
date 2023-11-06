import WinningNumberArrayValidator from '../../../src/validator/WinningNumberArrayValidator.js';
import errorMessage from '../../../src/constants/errorMessage.js';
import { shuffleArray } from '../../../src/util/shuffleArray.js';

describe('winningNumberValidator 테스트', () => {
	test('6자리를 입력하지 않았을 때 에러', () => {
		const winningNumberArray = ['1', '2', '3', '4', '5'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.NOT_SIX_COUNT);
	});

	test('범위를 벗어난 수를 입력했을 때 에러', () => {
		const winningNumberArray = ['1', '2', '3', '4', '5', '50'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.OUT_OF_RANGE);
	});

	test('중복된 수가 있을 때 에러', () => {
		const winningNumberArray = ['1', '2', '3', '4', '5', '5'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.DUPLICATED_NUMBER);
	});

	test('문자가 포함되었을 때 에러', () => {
		const winningNumberArray = ['1', '2', '3', '4', '5', 'A'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.NOT_NUMBER);
	});

	test('소수가 포함되었을 때 에러', () => {
		const winningNumberArray = ['1', '2', '3', '4', '5', '1.2'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.NOT_NATURAL_NUMBER);
	});

	test('1.0이 입력되었을 때 에러', () => {
		const winningNumberArray = ['1.0', '2', '3', '4', '5', '6'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('+1이 입력되었을 때 에러', () => {
		const winningNumberArray = ['+1', '2', '3', '4', '5', '6'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.UNUSUAL_INPUT);
	});

	test('01이 입력되었을 때 에러', () => {
		const winningNumberArray = ['01', '2', '3', '4', '5', '6'];
		expect(() => WinningNumberArrayValidator.validate(shuffleArray(winningNumberArray))).toThrow(errorMessage.UNUSUAL_INPUT);
	});
});