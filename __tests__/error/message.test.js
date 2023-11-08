import { ERROR_MESSAGE_FUNCTION } from '../../src/constants/Messages.js';

describe('ERROR_MESSAGE_FUNCTION 객체', () => {
  test('divide 메서드가 올바른 문자열을 반환해야 합니다', () => {
    const divisor = 1000;
    const expectedMessage = `${divisor}원 단위로만 구매가능합니다.\n`;

    const result = ERROR_MESSAGE_FUNCTION.divide(divisor);

    expect(result).toBe(expectedMessage);
  });

  test('purchaseAmountMax 메서드가 올바른 문자열을 반환해야 합니다', () => {
    const max = 10000;
    const expectedMessage = `로또 구입 금액은 ${max.toLocaleString()}원을 초과할 수 없습니다.\n`;

    const result = ERROR_MESSAGE_FUNCTION.purchaseAmountMax(max);

    expect(result).toBe(expectedMessage);
  });

  test('validScope 메서드가 올바른 문자열을 반환해야 합니다', () => {
    const start = 1;
    const end = 45;
    const expectedMessage = `${start}~${end}사이의 숫자만 입력이 가능합니다.\n`;

    const result = ERROR_MESSAGE_FUNCTION.validScope(start, end);

    expect(result).toBe(expectedMessage);
  });

  test('validScope 메서드의 기본 값이 올바르게 동작해야 합니다', () => {
    const expectedMessage = `${1}~${45}사이의 숫자만 입력이 가능합니다.\n`;

    const result = ERROR_MESSAGE_FUNCTION.validScope();

    expect(result).toBe(expectedMessage);
  });
});
