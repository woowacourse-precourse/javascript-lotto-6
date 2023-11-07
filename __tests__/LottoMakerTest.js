import LottoMaker from '../src/LottoMaker.js';

describe('로또 번호 생성 테스트', () => {
  test('구매 수량만큼의 로또를 생성', async () => {
    const lottos = await LottoMaker.generate(5);
    expect(lottos.length).toBe(5);
  });

  test('각각의 로또는 중복되는 숫자가 없으며 길이는 6이다', async () => {
    const lottos = await LottoMaker.generate(5);
    expect(() => {
      lottos.forEach((lotto) => {
        const lottoDeletedDuplicate = new Set(lotto);
        if (lottoDeletedDuplicate.size != 6) {
          throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
        }
      });
    }).toBeTruthy();
  });
});
