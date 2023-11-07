import UserLotto from '../src/model/UserLotto.js';
import { ERRORMESSAGE } from '../src/constants/constants.js';

/* eslint-disable */

describe('UserLotto 클래스', () => {
  test('유효한 구매 금액이 주어지면 아무 예외도 발생하지 않는다.', () => {
    expect(() => {
      new UserLotto(3000);
    }).not.toThrow();
  });

  test('유효하지 않은 숫자로 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(NaN);
    }).toThrow(ERRORMESSAGE.purchaseInput);
  });

  test('1,000 단위로 나누어지지 않는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(2500);
    }).toThrow(ERRORMESSAGE.purchaseAmount);
  });

  test('Number.MAX_SAFE_INTEGER를 초과하는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow(ERRORMESSAGE.purchaseToBig);
  });

  test('Number.MIN_SAFE_INTEGER 미만의 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(Number.MIN_SAFE_INTEGER - 1);
    }).toThrow(ERRORMESSAGE.purchaseToSmall);
  });

  test('음수 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(-1000);
    }).toThrow(ERRORMESSAGE.purchaseRange1);
  });

  test('4,000,000,000을 초과하는 구매 금액이 주어지면 예외가 발생.', () => {
    expect(() => {
      new UserLotto(4000000001);
    }).toThrow(ERRORMESSAGE.purchaseRange2);
  });
});
