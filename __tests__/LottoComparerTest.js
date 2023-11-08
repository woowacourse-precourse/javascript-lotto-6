import LottoComparer from './../src/models/LottoComparer.js';

describe('LottoComparerTest', () => {
  let lottoComparer;
  beforeEach(() => {
    lottoComparer = new LottoComparer([], {});
  });

  test('checkBonusNumber : lotto 번호중 bonusNumber 가 하나라도 포함되면 true를 반환한다.', () => {
    const checkNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    lottoComparer.bonusNumber = bonusNumber;

    expect(lottoComparer.checkBonusNumber(checkNumber)).toBe(true);
  });
});
