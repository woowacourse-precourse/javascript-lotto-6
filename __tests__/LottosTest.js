import Lottos from '../src/models/Lottos';

describe('Lottos 클래스 테스트', () => {
  const amount = [3, 5, 10];

  test.each(amount)('로또 리스트를 생성한다 %i', (amount) => {
    const lottos = new Lottos(amount);
    const lottoList = lottos.getLottos();

    lottoList.forEach((lotto) => {
      console.log(lotto.getLotto());
    });
    expect(lottoList.length).toBe(amount);
  });
});
