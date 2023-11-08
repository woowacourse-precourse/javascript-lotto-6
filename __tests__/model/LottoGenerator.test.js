import LottoGenerator from '../../src/model/LottoGenerator.js';

describe('LottoGenerator', () => {
  test('로또 발행은 배열 타입으로 리턴해야합니다.', () => {
    const lottos = LottoGenerator.run(5);
    expect(Array.isArray(lottos)).toBe(true);
  });

  test('로또를 발행할 때 각 로또 번호는 6개여야 한다. ', () => {
    const lottos = LottoGenerator.run(5);

    lottos.forEach((lotto) => {
      expect(lotto).toHaveLength(6);
    });
  });

  test('구입 금액에 맞는 로또 개수를 발행해야한다.', () => {
    const lottos = LottoGenerator.run(10);
    expect(lottos).toHaveLength(10);
  });

  it('발행된 로또는 오름차순으로 정렬되어있어야 한다.', () => {
    const lottos = LottoGenerator.run(5);

    lottos.forEach((lotto) => {
      expect(lotto).toEqual(lotto.slice().sort((a, b) => a - b));
    });
  });
});
