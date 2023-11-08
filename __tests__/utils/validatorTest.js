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

  it.each(cases)('값이 양의 정수인 경우 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isPositiveInteger(input);

    // then
    expect(result).toBe(expected);
  });
});

describe('isPositiveIntegerArray 함수 테스트', () => {
  // given
  const cases = [
    { input: 'not array', expected: false },
    { input: [10, 3, ''], expected: false },
    { input: ['10', '2'], expected: false },
    { input: [10, 2], expected: true },
  ];

  it.each(cases)('배열의 모든 요소가 number인 경우 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isPositiveIntegerArray(input);

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

  it.each(cases)('값이 0으로 나누어떨어지는 경우 true를 반환한다.', ({ input, expected }) => {
    // when
    const result = validator.isDividedBy(...input);

    // then
    expect(result).toBe(expected);
  });
});

describe('isDuplicate 함수 테스트', () => {
  // given
  const cases = [
    { input: ['10', 10], expected: false },
    { input: [' ', ''], expected: false },
    { input: [10, 10], expected: true },
  ];

  it.each(cases)('정확히 같은 값이 배열에 두개 이상 중복되면 false를 반환한다', ({ input, expected }) => {
    // when
    const result = validator.isDuplicate(input);

    // then
    expect(result).toBe(expected);
  });
});

describe('isNumberInRange 함수 테스트', () => {
  it('값이 범위 안에 속하면 true를 반환한다.', () => {
    const input = {
      min: 0,
      max: 10,
      value: 3,
    };

    const result = validator.isNumberInRange(input.min, input.max, input.value);

    expect(result).toBe(true);
  })
});

describe('isNumberInRangeArray 함수 테스트', () => {
  it('값이 하나라도 범위 안에 속하지 않으면 false를 반환한다.', () => {
    const input = {
      min: 0,
      max: 10,
      value: [1, 2, 3, 11],
    };

    const result = validator.isNumberInRangeArray(input.min, input.max, input.value);

    expect(result).toBe(false);
  })
});
