import validate from '../src/domains/validation.js';
import { ERROR, pattern } from '../src/constants.js';

describe('유효성 검사 테스트', () => {
  test('당첨번호가 1에서 45가 사이가 아니면 예외가 발생한다.', () => {
    const inputNumbers = '1, 2, 3, 4, 5, 46';
    expect(() => validate.winningNumbers(inputNumbers)).toThrowError(ERROR.TYPE_CHECK);
  });

  test('당첨번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    const inputNumbers = 'a, b, d, e, f, g';
    expect(() => validate.winningNumbers(inputNumbers)).toThrowError(ERROR.TYPE_CHECK);
  });
});
