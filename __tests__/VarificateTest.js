import LOTTO_CONSTANTS from '../src/Constants/LottoContstants';
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
			[`${4 * LOTTO_CONSTANTS.standartLottoCost}`],
			[`${2 * LOTTO_CONSTANTS.standartLottoCost}`],
			[`${12 * LOTTO_CONSTANTS.standartLottoCost}`],
		])(`%s는 ${LOTTO_CONSTANTS.standartLottoCost}로 나누어 떨어진다.`, (value) => {
			// when, then
			expect(Varificator.isNotDividableWithStandardCost(value)).toBe(false);
		});

		test.each([
			// given
			[`${4 * LOTTO_CONSTANTS.standartLottoCost + 100}`],
			[`${2 * LOTTO_CONSTANTS.standartLottoCost + 10}`],
			[`${12 * LOTTO_CONSTANTS.standartLottoCost + 1}`],
		])(`%s는 ${LOTTO_CONSTANTS.standartLottoCost}로 나누어 떨어지지 않는다.`, (value) => {
			// when, then
			expect(Varificator.isNotDividableWithStandardCost(value)).toBe(true);
		});
	});

	describe('isNotFitWithLottoLength => 인자로 받은 값이 로또 번호 개수에 맞는지 검증하는 로직', () => {
		test('로또 번호 개수와 일치한다.', () => {
			// given
			const numbers = Array.from(
				{ length: LOTTO_CONSTANTS.lottoNumberCount },
				(_, idx) => `${++idx}`,
			);

			// when, then
			expect(Varificator.isNotFitWithLottoLength(numbers)).toBe(false);
		});

		test('로또 번호 개수와 불일치 한다.', () => {
			// given
			const numbers = Array.from(
				{ length: LOTTO_CONSTANTS.lottoNumberCount + 1 },
				(_, idx) => `${++idx}`,
			);

			// when, then
			expect(Varificator.isNotFitWithLottoLength(numbers)).toBe(true);
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
});
