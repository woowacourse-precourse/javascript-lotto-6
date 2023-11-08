import Validator from '../src/utils/Validator';

describe('유저 입력 유효성 검사', () => {
  test.each([[''], ['  ']])('유저 입력 빈 값 테스트', (input) => {
    expect(() => Validator.validateEmptyInput(input)).toThrow();
  });

  test.each([[2500], [1200], [120003]])('로또 구매 금액이 1000원으로 안 나누어질 경우 테스트', (input) => {
    expect(() => Validator.validateDivisible(input)).toThrow();
  });

  test.each([[999], [-200], [30]])('로또 구매 금액이 최소 금액보다 작을경우 테스트', (input) => {
    expect(() => Validator.validateMinPrice(input)).toThrow();
  });

  test.each([[-12], [0], [46]])('로또 번호가 지정된 범위인지 테스트', (input) => {
    expect(() => Validator.validateInRange(input)).toThrow();
  });

  test('로또 번호가 유니크한지 테스트', () => {
    expect(() => Validator.validateUnique([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() => Validator.validateUnique([22, 34, 45, 16, 22, 7])).toThrow();
  });

  test.each([
    [[1, 2, 3], 3],
    [[1, 2, 3, 4, 5, 6], 6],
  ])('지정한 길이를 검사하는 함수 테스트', (input, length) => {
    expect(() => Validator.validateLength(input, length)).not.toThrow();
  });

  test.each([['good'], ['ㅁ']])('보너스 번호 숫자인지 확인', (input) => {
    expect(() => Validator.validateBonusNumberString(input)).toThrow();
  });

  test.each([[[1, 2, 2, 3, 4, 5]], [[0, 1, 2, 3, 4, 5]], [[11, 23, 34, 42, 46, 17]], [[11, 23, 34, 42, 45, 17, 38]]])(
    '당첨번호 유효성 검사',
    (input) => {
      expect(() => Validator.validateWinningNumber(input)).toThrow();
    },
  );
});
