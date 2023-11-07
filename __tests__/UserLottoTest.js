import UserLotto from '../src/model/UserLotto.js';
import { ERRORMESSAGE } from '../src/constants/constants.js';

/* eslint-disable */

describe('UserLotto 클래스', () => {
  test('유효한 구매 금액이 주어지면 아무 예외도 발생하지 않는다.', () => {
    expect(() => {
      new UserLotto(3000);
    }).not.toThrow();
  });
	
});
