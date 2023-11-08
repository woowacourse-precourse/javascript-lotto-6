import Validator from '../../src/utils/Validator.js';

describe('당첨 번호 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('당첨 번호가 1-45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => validator.winningNumberValidator([1, 2, 3, 4, 5, 77])).toThrow();
  });

  test('당첨 번호의 개수가 6개가 아니면 예외가 발생한다. ', () => {
    expect(() => validator.winningNumberValidator([1, 2, 3, 4, 5, 6, 7])).toThrow();
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => validator.winningNumberValidator([1, 2, 3, 4, 5, 'a'])).toThrow();
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => validator.winningNumberValidator([1, 2, 3, 4, 5, 5])).toThrow();
  });
});
