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

  
});
