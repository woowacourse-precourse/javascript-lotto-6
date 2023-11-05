/* eslint-disable max-lines-per-function */
describe('숫자 테스트', () => {
  test.each([
    { input: 2000000000, expected: '2,000,000,000' },
    { input: 3000, expected: '3,000' },
    { input: 400000, expected: '400,000' },
  ])('toLocaleString 메서드로 천단위마다 쉼표(,) 삽입', ({ input, expected }) => {
    const KOREA_LANGUAGE_FORMAT = 'ko-KR';
    expect(input.toLocaleString(KOREA_LANGUAGE_FORMAT)).toBe(expected);
  });

  test('isInteger 메서드로 정수인지 실수인지 확인', () => {
    const input = 3.2;
    const result = false;

    expect(Number.isInteger(input)).toEqual(result);
  });

  test('toFixed 메서드로 인자 자리수까지 반올림이 하여 문자로 반환되는지 확인', () => {
    const input = 62.54444333444333;
    const result = '62.5';

    expect(input.toFixed(1)).toEqual(result);
  });
});
