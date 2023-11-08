import StringUtil from '../src/Utils/StringUti.js';

describe('StringUtil 테스트', () => {
	test('번호와 split 기준자로 이루어진 텍스트를 전달하면 숫자 배열을 반환한다.', () => {
		// given
		const text = '1,2,3,4,6';

		// when
		expect(StringUtil.stringToNumberArray(text)).toEqual([1, 2, 3, 4, 6]);
	});
});
