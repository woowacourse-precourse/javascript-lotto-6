import Buy from '../../src/buy/Buy.js';

describe('buy : 생성 테스트', () => {
  test.each(
    ['3000', '66000', '1000000000', '9000', '32000', '1000']
  )('buy 생성이 오류 없이 진행되어야 한다.', (input) => {
    expect(() => new Buy(input)).not.toThrow();
  });
});