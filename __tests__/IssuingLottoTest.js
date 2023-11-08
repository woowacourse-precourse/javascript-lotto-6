import IssuingLotto from '../src/domain/IssuingLotto.js';
import { NUMBER_OPTIONS } from '../src/service/Constants.js';

describe('IssuingLotto 클래스 테스트', () => {
  test('발급한 로또의 갯수 테스트', () => {
    const count = 5;

    const issuingLotto = new IssuingLotto(count);
    const lottoList = issuingLotto.getLottoList();

    expect(lottoList).toHaveLength(count);
  });

  test('발급한 로또의 숫자 유효성 테스트', () => {
    const count = 5;

    const issuingLotto = new IssuingLotto(count);
    const lottoList = issuingLotto.getLottoList();

    lottoList.forEach((lotto) => {
      expect(lotto).toHaveLength(NUMBER_OPTIONS.winningLength);

      lotto.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(NUMBER_OPTIONS.beginRange);
        expect(number).toBeLessThanOrEqual(NUMBER_OPTIONS.endRange);
      });
    });
  });
});
