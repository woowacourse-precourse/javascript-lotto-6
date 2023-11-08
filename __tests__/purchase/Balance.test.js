import Balance from '../../src/purchase/Balance.js';
import { BalanceTypeError } from '../../src/error/CustomErrors.js';

describe('purchase/balance : 생성 balance 유효성 검사 테스트', () => {
  test.each(
    ['오백원', '0', '1000.5', '400', '3578', '-2000']
  )('구입 금액이 1000의 배수인 자연수가 아닌 경우, BalanceTypeError을 반환한다.', (input) => {
    const result = () => new Balance(input);

    expect(result).toThrowError(BalanceTypeError);
  });
});

describe('purchase/balance : balance 반환값 테스트', () => {
  test.each(
    ['1000', '20000', '19000', '4000', '77000', '100000']
  )('balance 생성값과, getBalance의 반환값이 동일해야 한다.', (input) => {
    const balance = new Balance(input)
    const result = balance.get();

    expect(result).toEqual(input);
  });
});
