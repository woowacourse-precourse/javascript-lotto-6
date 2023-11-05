import CheckLotto from '../../../src/util/CheckLotto.js';
import { shuffleArray } from '../../../src/util/shuffleArray.js';

describe('CheckLotto#util 테스트', () => {
	test('getCorrectCount 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 12, 13, 14, 15, 16],
			[1, 2, 13, 14, 15, 16],
			[1, 2, 3, 14, 15, 16],
			[1, 2, 3, 4, 15, 16],
			[1, 2, 3, 4, 5, 16],
			[1, 2, 3, 4, 5, 6],
		];

		const expectedResult = [0, 1, 2, 3, 4, 5, 6];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.getCorrectCount(shuffleArray(lottoNumber), shuffleArray(winningNumber));
		});

		expect(result).toEqual(expectedResult);
	});

	test('fifthPlace 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 2, 3, 14, 15, 16],
			[1, 2, 13, 4, 15, 16],
			[1, 2, 3, 4, 15, 16],
			[1, 2, 3, 4, 5, 6],
		];

		const expectedResult = [false, true, true, false, false];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.fifthPlace(shuffleArray(lottoNumber), shuffleArray(winningNumber));
		});

		expect(result).toEqual(expectedResult);
	});

	test('fourthPlace 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 2, 3, 4, 15, 16],
			[1, 2, 13, 4, 5, 16],
			[1, 2, 3, 4, 5, 16],
			[1, 2, 3, 4, 5, 6],
		];

		const expectedResult = [false, true, true, false, false];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.fourthPlace(shuffleArray(lottoNumber), shuffleArray(winningNumber));
		});

		expect(result).toEqual(expectedResult);
	});

	test('thirdPlace 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 2, 3, 4, 5, 16],
			[1, 2, 3, 4, 15, 6],
			[1, 2, 3, 4, 5, 7],
			[1, 2, 3, 7, 5, 6],
		];

		const expectedResult = [false, true, true, false, false];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.thirdPlace(shuffleArray(lottoNumber), shuffleArray(winningNumber), bonusNumber);
		});

		expect(result).toEqual(expectedResult);
	});

	test('secondPlace 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 2, 3, 4, 5, 16],
			[1, 2, 3, 4, 15, 6],
			[1, 2, 3, 4, 5, 7],
			[1, 2, 3, 7, 5, 6],
		];

		const expectedResult = [false, false, false, true, true];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.secondPlace(shuffleArray(lottoNumber), shuffleArray(winningNumber), bonusNumber);
		});

		expect(result).toEqual(expectedResult);
	});

	test('firstPlace 테스트', () => {
		const winningNumber = [1, 2, 3, 4, 5, 6];

		const lottoNumberArray = [
			[11, 12, 13, 14, 15, 16],
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 5, 7],
		];

		const expectedResult = [false, true, false];

		const result = lottoNumberArray.map((lottoNumber) => {
			return CheckLotto.firstPlace(shuffleArray(lottoNumber), shuffleArray(winningNumber));
		});

		expect(result).toEqual(expectedResult);
	});

	test('calculateRateOfReturn 테스트', () => {
		const purchaseAmount = 8000;

		const lottoResultArray = [
			{ firstPlaceCount: 1, secondPlaceCount: 0, thirdPlaceCount: 0, fourthPlaceCount: 0, fifthPlaceCount: 0 },
			{ firstPlaceCount: 0, secondPlaceCount: 0, thirdPlaceCount: 0, fourthPlaceCount: 0, fifthPlaceCount: 1 },
			{ firstPlaceCount: 1, secondPlaceCount: 1, thirdPlaceCount: 1, fourthPlaceCount: 1, fifthPlaceCount: 1 },
			{ firstPlaceCount: 0, secondPlaceCount: 1, thirdPlaceCount: 1, fourthPlaceCount: 0, fifthPlaceCount: 3 },
			{ firstPlaceCount: 0, secondPlaceCount: 0, thirdPlaceCount: 0, fourthPlaceCount: 0, fifthPlaceCount: 0 },
		];

		const expectedResult = ['25000000.0', '62.5', '25394437.5', '393937.5', '0.0'];

		const result = lottoResultArray.map((lottoResult) => {
			return CheckLotto.calculateRateOfReturn(purchaseAmount, lottoResult);
		});

		expect(result).toEqual(expectedResult);
	});
});
