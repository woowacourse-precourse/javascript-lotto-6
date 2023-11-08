import Buy from '../../src/buy/Buy.js';

describe('buy : test', () => {
  test.each(
    ['3000', '66000', '9000', '32000', '1000']
  )('buy 생성이 오류 없이 진행되어야 한다.', (input) => {
    expect(() => new Buy(input)).not.toThrow();
  });

  test('amount가 정상적인 값을 출력해야 한다.', () => {
    const BALANCE = '3000';
    const AMOUNT = 3;
    const buy = new Buy(BALANCE);
    const result = buy.amount();

    expect(result).toEqual(AMOUNT);
  });
});