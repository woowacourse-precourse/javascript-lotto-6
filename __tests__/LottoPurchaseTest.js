import LottoPurchase from '../src/model/LottoPurchase';

describe('로또 구매 금액 클래스 테스트', () => {
  test('구매 금액이 공백이면 예외가 발생한다.', () => {
    expect(() => {
      LottoPurchase.validate('');
    }).toThrow('[ERROR]');
  });

  test('1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoPurchase.validate(2030);
    }).toThrow('[ERROR]');
  });

  test('20000원 이상이면 예외가 발생한다.', () => {
    expect(() => {
      LottoPurchase.validate(30000);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoPurchase.validate('이만원');
    }).toThrow('[ERROR]');
  });
});
