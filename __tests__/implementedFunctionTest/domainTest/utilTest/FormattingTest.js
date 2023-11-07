import Formatting from '../../../../src/util/Formatting.js';

describe('Formatting 테스트', () => {
	test('insertCommasByThousandUnits 테스트', () => {
		const input = ['0.0', '100.0', '1000.0', '100000.0'];
		const expectedResult = ['0.0', '100.0', '1,000.0', '100,000.0'];

		const result = input.map((number) => {
			return Formatting.insertCommasByThousandUnits(number);
		});

		expect(result).toEqual(expectedResult);
	});

	test('convertArrayToString 테스트', () => {
		const input = [1, 2, 3, 4, 5, 6];
		const expectedResult = '[1, 2, 3, 4, 5, 6]';

		expect(Formatting.convertArrayToString(input)).toEqual(expectedResult);
	});
});