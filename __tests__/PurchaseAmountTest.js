import PurchaseAmount from '../src/models/PurchaseAmount.js';

describe('구입금액 클래스 테스트', () => {
  test.each([['string'], ['3.14']])(
    '구매금액에 숫자 외에 문자가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new PurchaseAmount(input);
      }).toThrow('[ERROR] 금액에 숫자 이외의 다른 문자는 올수 없습니다.');
    }
  );

  test.each([['01000'], ['001000']])(
    '구매금액이 0으로 시작하면 예외를 발생한다.',
    (input) => {
      expect(() => {
        new PurchaseAmount(input);
      }).toThrow('[ERROR] 0으로 시작하는 금액은 입력할 수 없습니다.');
    }
  );

  test('구매금액이 1000보다 작으면 예외를 발생한다.', () => {
    const inputAmount = '500';

    expect(() => {
      new PurchaseAmount(inputAmount);
    }).toThrow('[ERROR] 금액은 1000이상 이어야 합니다.');
  });

  test('구매금액이 0으로 시작하면 예외를 발생한다.', () => {
    const inputAmount = '1500';

    expect(() => {
      new PurchaseAmount(inputAmount);
    }).toThrow('[ERROR] 금액은 1000단위 이어야 합니다.');
  });
});
