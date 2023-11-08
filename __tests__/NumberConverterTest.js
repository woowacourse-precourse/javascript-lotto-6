import { NumberConverter } from '../src/utils/NumberConverter.js';
describe('숫자 변환 테스트', () => {
  test.each([
    { input: 1000, expected: '1,000' },
    { input: 10000, expected: '10,000' },
    { input: 1000000, expected: '1,000,000' },
  ])('$input에 1000단위로 콤마를 찍으면, $expected가 반환된다.', ({ input, expected }) => {
    expect(NumberConverter.splitIntoThreeDigitWithComma(input)).toBe(expected);
  });
});
