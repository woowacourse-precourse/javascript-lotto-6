import LottoShop from '../src/models/LottoShop.js';

describe('로또가게 클래스 테스트', () => {
  test('당첨번호에 공백이 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop('1,2,3,4, ,6');
    }).toThrow('[ERROR]');
  });

  test('당첨번호에 맨앞에 쉽표가 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop(',1,2,3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨번호에 맨뒤에 쉽표가 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop(',1,2,3,4,5,6,');
    }).toThrow('[ERROR]');
  });

  test('당첨번호가 6개보다 적을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨번호가 6개보다 많을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨번호에 1보다 작은 수가 포함되어 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop('1,2,-13,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨번호에 45보다 큰 수가 포함되어 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      new LottoShop('1,2,3,4,50,6');
    }).toThrow('[ERROR]');
  });

  test('보너스번호를 입력하지 않고 결과를 확인하려고 하면 에러가 발생한다.', () => {
    expect(() => {
      const lottoShop = new LottoShop('1,2,3,4,5,6');
      lottoShop.checkingTotalResult([[1, 2, 3, 4, 5, 6]]);
    }).toThrow('[ERROR]');
  });

  test('결과를 확인하지 않고 수익률을 확인하려고 하면 에러가 발생한다.', () => {
    expect(() => {
      const lottoShop = new LottoShop('1,2,3,4,5,6');
      lottoShop.returnProfitRate();
    }).toThrow('[ERROR]');
  });
});
