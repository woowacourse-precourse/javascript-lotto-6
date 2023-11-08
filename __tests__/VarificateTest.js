import { LOTTO_CONSTANTS } from '../src/Constants/LottoContstants';
import Varificator from '../src/Utils/Varification';

describe('Varification Test', () => {
	describe('isInvalidNumber => 유효한 숫자 (양의 정수)가 아닌지 검증하는 함수', () => {
		test.each([
			// given
			['1'],
			['100'],
			['123'],
		])('%s 값이 양의 정수인 경우 false', (value) => {
			// when, then
			expect(Varificator.isInvalidNumber(value)).toBe(false);
		});

		test.each([
			//given
			['-1'],
			['-10'],
		])('%s 값이 음수인 경우 true', (value) => {
			// when, then
			expect(Varificator.isInvalidNumber(value)).toBe(true);
		});

		test.each([
			//given
			['1.1'],
			['1.04'],
		])('%s 값이 소수인 경우 true', (value) => {
			// when, then
			expect(Varificator.isInvalidNumber(value)).toBe(true);
		});

		test('0인 경우 true', () => {
			// given
			const value = 0;

			//when, then
			expect(Varificator.isInvalidNumber(value)).toBe(true);
		});
	});

	describe('isNotDividableWithStandardCost => 전달 받은 값이 기준 요금으로 나누어 떨어지는지 검증하는 함수', () => {
		test.each([
			// given
			[`${4 * LOTTO_CONSTANTS.standartLottoCost}`, LOTTO_CONSTANTS.standartLottoCost],
			[`${2 * LOTTO_CONSTANTS.standartLottoCost}`, LOTTO_CONSTANTS.standartLottoCost],
			[`${12 * LOTTO_CONSTANTS.standartLottoCost}`, LOTTO_CONSTANTS.standartLottoCost],
		])(`%s는 ${LOTTO_CONSTANTS.standartLottoCost}로 나누어 떨어진다.`, (value, standardCost) => {
			// when, then
			expect(Varificator.isNotDividableWithStandardCost(value, standardCost)).toBe(false);
		});

		test.each([
			// given
			[`${4 * LOTTO_CONSTANTS.standartLottoCost + 100}`, LOTTO_CONSTANTS.standartLottoCost],
			[`${2 * LOTTO_CONSTANTS.standartLottoCost + 10}`, LOTTO_CONSTANTS.standartLottoCost],
			[`${12 * LOTTO_CONSTANTS.standartLottoCost + 1}`, LOTTO_CONSTANTS.standartLottoCost],
		])(
			`%s는 ${LOTTO_CONSTANTS.standartLottoCost}로 나누어 떨어지지 않는다.`,
			(value, standardCost) => {
				// when, then
				expect(Varificator.isNotDividableWithStandardCost(value, standardCost)).toBe(true);
			},
		);
	});

	describe('isNotFitWithLottoLength => 인자로 받은 값이 로또 번호 개수에 맞는지 검증하는 로직', () => {
		test('로또 번호 개수와 일치한다.', () => {
			// given
			const lottoCount = 5;
			const numbers = Array.from({ length: lottoCount }, (_, idx) => `${++idx}`);

			// when, then
			expect(Varificator.isNotFitWithLottoLength(numbers, lottoCount)).toBe(false);
		});

		test('로또 번호 개수와 불일치 한다.', () => {
			// given
			const lottoCount = 5;
			const numbers = Array.from({ length: lottoCount + 1 }, (_, idx) => `${++idx}`);

			// when, then
			expect(Varificator.isNotFitWithLottoLength(numbers, lottoCount)).toBe(true);
		});
	});

	describe('isDuplicatedNumber => 배열 내 중복된 값이 존재하는지 검증하는 로직', () => {
		test.each([
			// given
			[[5, 5]],
			[[6, 5, 6]],
			[[10, 10, 1, 2, 3]],
		])(`%s는 중복값이 존재한다.`, (value) => {
			// when, then
			expect(Varificator.isDuplicatedNumber(value)).toBe(true);
		});

		test.each([
			// given
			[[0, 1, 2]],
			[[1, 2, 3, 4, 5]],
			[[1]],
		])(`%s는 중복값이 존재하지 않는다.`, (value) => {
			// when, then
			expect(Varificator.isDuplicatedNumber(value)).toBe(false);
		});
	});

	describe('isNotNumberInRange => 숫자가 일정 범위 안에 존재하지 않는지 검증하는 로직', () => {
		const MAX_RANGE = 10;
		const MIN_RANGE = 1;

		test.each([
			// given
			[5],
			[6],
			[10],
		])(`%s는 ${MIN_RANGE}과 ${MAX_RANGE} 사이에 존재한다.`, (value) => {
			// when, then
			expect(Varificator.isNotNumberInRange(value, MAX_RANGE, MIN_RANGE)).toBe(false);
		});

		test.each([
			// given
			[0],
			[11],
			[-1],
		])(`%s는 ${MIN_RANGE}과 ${MAX_RANGE} 사이에 존재하지 않는다.`, (value) => {
			// when, then
			expect(Varificator.isNotNumberInRange(value, MAX_RANGE, MIN_RANGE)).toBe(true);
		});
	});

	describe('isNumberInArray => 숫자가 배열 내에 존재하는지 검증하는 로직', () => {
		test('배열 내에 숫자가 존재한다.', () => {
			// given
			const numbers = [1, 2, 3, 4, 5];
			const targetNumber = 5;

			// when, given
			expect(Varificator.isNumberInArray(numbers, targetNumber)).toBe(true);
		});

		test('배열 내에 숫자가 존재하지 않는다.', () => {
			// given
			const numbers = [1, 2, 3, 4, 5];
			const targetNumber = 6;

			// when, given
			expect(Varificator.isNumberInArray(numbers, targetNumber)).toBe(false);
		});
	});
});
