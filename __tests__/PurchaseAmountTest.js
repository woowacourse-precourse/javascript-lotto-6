import PurchaseAmount from '../src/models/PurchaseAmount.js';

describe('구입금액 클래스 테스트', () => {
  test.each(['string', '3.14', '5@@@'])(
    '구매금액에 숫자 외에 문자가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new PurchaseAmount(input);
      }).toThrow('특수문자, 영문자, 소수');
    }
  );

  test('구매금액이 0으로 시작하면 예외를 발생한다.', () => {
    const inputAmount = '01000';

    expect(() => {
      new PurchaseAmount(inputAmount);
    }).toThrow('0으로 시작하는 숫자');
  });

  test('구매금액이 1000보다 작으면 예외를 발생한다.', () => {
    const inputAmount = '500';

    expect(() => {
      new PurchaseAmount(inputAmount);
    }).toThrow('1000이상');
  });

  test('구매금액이 1000단위가 아니면 예외를 발생한다.', () => {
    const inputAmount = '1500';

    expect(() => {
      new PurchaseAmount(inputAmount);
    }).toThrow('1000단위');
  });
});
