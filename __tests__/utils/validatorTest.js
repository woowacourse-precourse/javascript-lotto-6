import App from '../../src/App';
import validator from '../../src/utils/validator';

describe('isNumericString 함수 테스트', () => {
  // given
  const cases = [
    { input: 'hello', expected: false },
    { input: ' ', expected: false },
    { input: '-1..', expected: false },
    { input: 1, expected: false },
    { input: '-1.0', expected: true },
    { input: '1', expected: true },
  ];

  it.each(cases)('문자열의 내부 값이 숫자일 때만 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isNumericString(input);

    // then
    expect(result).toBe(expected);
  });
});

describe('isPositiveInteger 함수 테스트', () => {
  // given
  const cases = [
    { input: 'hello', expected: false },
    { input: ' ', expected: false },
    { input: '1', expected: false },
    { input: -1, expected: false },
    { input: 1, expected: true },
  ];

  it.each(cases)('값이 양의 정수일 때만 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isPositiveInteger(input);

    // then
    expect(result).toBe(expected);
  });
});

describe('isDivideBy 함수 테스트', () => {
  // given
  const cases = [
    { input: ['10', '2'], expected: false },
    { input: [' ', ''], expected: false },
    { input: [10, 3], expected: false },
    { input: [10, 2], expected: true },
  ];

  it.each(cases)('값이 0으로 나누어떨어질 때만 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isDividedBy(...input);

    // then
    expect(result).toBe(expected);
  });
})
