import Price from '../src/Price.js';

describe('구입할 금액 클래스 테스트', () => {
  test('1,000원 단위로 입력하지 않으면 예외가 발생한다.', () => {
    const PRICE = 12500;

    expect(() => {
      new Price(PRICE);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    const UNDEFINED_VALUE = undefined;

    expect(() => {
      new Price(UNDEFINED_VALUE);
    }).toThrow('[ERROR]');
  });

  test('1,000 단위의 숫자를 입력하면 예외가 발생하지 않는다.', () => {
    const PRICE = 25000;

    expect(() => {
      new Price(PRICE);
    }).not.toThrow('[ERROR]');
  });

  test('1,000 단위의 숫자를 입력하면 유효성 검사를 마친 가격 값과 개수 값을 얻을 수 있다.', () => {
    // given
    const PRICE = 25000;
    const NUMBER = 25;
    const output = { price: PRICE, number: NUMBER };

    // when
    const priceObject = new Price(PRICE);
    const priceAndNumber = priceObject.getPriceAndNumber();

    // then
    expect(priceAndNumber).toEqual(output);
  });
});
