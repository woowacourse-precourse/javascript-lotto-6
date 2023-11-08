import IssuingLotto from '../src/domain/IssuingLotto.js';

describe('IssuingLotto 클래스 테스트', () => {
  test('발급한 로또의 갯수 테스트', () => {
    const count = 5;

    const issuingLotto = new IssuingLotto(count);
    const lottoList = issuingLotto.getLottoList();

    expect(lottoList).toHaveLength(count);
  });
});
