import validate from '../src/domains/validation.js';
import { ERROR } from '../src/constants.js';

describe('유효성 검사 테스트', () => {
  test('당첨번호가 1에서 45가 사이가 아니면 예외가 발생한다.', () => {
    const inputNumbers = '1, 2, 3, 4, 5, 46';
    expect(() => validate.winningNumbers(inputNumbers)).toThrowError(ERROR.RANGE_CHECK);
  });

  test('당첨번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    const inputNumbers = 'a, b, d, e, f, g';
    expect(() => validate.winningNumbers(inputNumbers)).toThrowError(ERROR.TYPE_CHECK);
  });

  test.each(['-9', null, undefined])('보너스 번호가 1에서 45사이가 아니라면 예외가 발생한다.', (input) => {
    expect(() => validate.bonusNumber(input)).toThrowError(ERROR.TYPE_CHECK);
  });

  test('입력금액이 1000원 단위가 아니라면 예외가 발생한다.', () => {
    const inputNumbers = '1250';
    expect(() => validate.money(inputNumbers)).toThrowError(ERROR.AMOUNT_CHECK);
  });

  test.each([undefined, null, '1000won'])('입력금액이 숫자 이외에 입력이 들어오면 예외가 발생한다.', (input) => {
    expect(() => validate.money(input)).toThrowError(ERROR.TYPE_CHECK);
  });
});
