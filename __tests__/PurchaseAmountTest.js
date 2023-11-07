import PurchaseAmount from '../src/PurchaseAmount';

describe('구입 금액 클래스 테스트', () => {
  test('정상 동작', () => {
    function happyPath() {
      const purchaseAmount = new PurchaseAmount('3000');

      return purchaseAmount.getAmount();
    }

    expect(happyPath()).toEqual(3000);
  });
  test('숫자로 변환할 수 없는 값이면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseAmount('invalidInput');
    }).toThrow('[ERROR]');
  });
  test('프로그램이 처리하기 힘들 정도로 큰 값이면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseAmount('9007199254740992');
    }).toThrow('[ERROR]');
  });
  test('구입 금액이 로또 1장의 가격보다 낮으면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseAmount('987');
    }).toThrow('[ERROR]');
  });
  test('구입 금액이 1,000원으로 나누어떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new PurchaseAmount('1234');
    }).toThrow('[ERROR]');
  });
});
