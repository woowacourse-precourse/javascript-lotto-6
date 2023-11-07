import { isValidAmountUnit, isValidAmountRange } from './index.js';

describe('isValidAmountUnit 함수 테스트', () => {
  test('구입금액이 1,000원 단위가 아닌 경우 false를 리턴한다.', () => {
    // GIVEN
    const amount = 1500;

    // WHEN
    const result = isValidAmountUnit(amount);

    // THEN
    expect(result).toBe(false);
  });

  test('구입금액이 숫자가 아닌 경우 false를 리턴한다.', () => {
    // GIVEN
    const amount = '1500';

    // WHEN
    const result = isValidAmountUnit(amount);

    // THEN
    expect(result).toBe(false);
  });

  test('구입금액이 1,000원 단위일 경우 true를 리턴한다.', () => {
    // GIVEN
    const amount = 5000;

    // WHEN
    const result = isValidAmountUnit(amount);

    // THEN
    expect(result).toBe(true);
  });
});

describe('isValidAmountRange 함수 테스트', () => {
  test('구입금액이 10만원 초과인 경우 false를 리턴한다', () => {
    // GIVEN
    const amount = 110000;

    // WHEN
    const result = isValidAmountRange(amount);

    // THEN
    expect(result).toBe(false);
  });

  test('구입금액이 10만원 이하일 경우 true를 리턴한다.', () => {
    // GIVEN
    const amount = 100000;

    // WHEN
    const result = isValidAmountRange(amount);

    // THEN
    expect(result).toBe(true);
  });
});
