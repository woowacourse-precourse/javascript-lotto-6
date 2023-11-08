import LottoData from '../src/models/LottoData.js';

describe('로또 구매 테스트', () => {
  let lottoData;

  beforeEach(() => {
    lottoData = new LottoData(8000);
  });

  test('로또 구매 개수 정하고 구매 개수만큼 로또 발행하기', () => {
    const result = lottoData.lottoIssuance();
    expect(result.count).toBe(8);
    expect(result.lottos).toHaveLength(8);
  });
});
