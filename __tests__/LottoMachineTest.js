import LottoMachine from '../src/\bDomain/LottoMachine';

describe('로또 머신 객체 테스트', () => {
  test('지불 가격에 맞게 로또를 발행해주는지 테스트', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
});
