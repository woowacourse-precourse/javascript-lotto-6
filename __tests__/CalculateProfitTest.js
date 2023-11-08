import CalculateProfit from '../src/CalculateProfit.js';

describe('CalculateProfit 클래스 테스트', () => {
  it('사용한 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new CalculateProfit({ results: {}, moneySpent: '1000' });
    }).toThrow('[ERROR]');
  });

  it('사용한 금액이 0 이하이면 예외가 발생한다.', () => {
    expect(() => {
      new CalculateProfit({ results: {}, moneySpent: 0 });
    }).toThrow('[ERROR]');
  });

  it('results가 객체가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new CalculateProfit({ results: 'results', moneySpent: 1000 });
    }).toThrow('[ERROR]');
  });

  it('results의 값 중 하나라도 정수가 아니거나 0 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new CalculateProfit({ results: { first: 1.5 }, moneySpent: 1000 });
    }).toThrow('[ERROR]');
  });

  it('results와 moneySpent를 기반으로 수익률을 올바르게 계산한다.', () => {
    const results = { 6: 1, '5+': 2, 5: 3, 4: 4, 3: 5 };
    const moneySpent = 10000;
    const calculateProfit = new CalculateProfit({ results, moneySpent });

    calculateProfit.printResults();
  });
});
