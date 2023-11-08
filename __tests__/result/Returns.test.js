import Returns from '../../src/result/Returns.js';

describe('result/returns 추가 및 호출 테스트', () => {
  const returns = new Returns();

  test('5000 을 추가하고 5000을 반환한다.', () => {
    returns.add(5000);
    expect(returns.get()).toEqual(5000);
  });

  test('50000 을 추가하고 55000을 반환한다.', () => {
    returns.add(50000);
    expect(returns.get()).toEqual(55000);
  });

  test('5000 을 추가하고 60000을 반환한다.', () => {
    returns.add(5000);
    expect(returns.get()).toEqual(60000);
  });
});
