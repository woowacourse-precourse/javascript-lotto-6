import TotalBuyPriceModel from '../src/models/TotalBuyPriceModel';

describe('총 구매 금액을 관리하는 클래스 테스트.', () => {
  test('총 구매 금액이 1000으로 나누어 떨어지는지 확인.', () => {
    expect(() => {
      new TotalBuyPriceModel(1500);
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel(0.1);
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel(1);
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel(0);
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel(-1000);
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel(134);
    }).toThrow('[ERROR]');
  });

  test('총 구매 금액의 타입이 숫자인지 테스트.', () => {
    expect(() => {
      new TotalBuyPriceModel('1000j');
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel('wr');
    }).toThrow('[ERROR]');
    expect(() => {
      new TotalBuyPriceModel('가나다');
    }).toThrow('[ERROR]');
  });
});
