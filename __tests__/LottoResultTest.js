import { GAME_REWARD } from '../src/constants/gameRule.js';
import LottoResult from '../src/model/LottoResult.js';

describe('💙 LottoResult 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult();
    lottoResult.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoResult.setBonusNumber(7);
  });

  test('[getWinningNumbers] 설정한 당첨 번호를 가져올 수 있다.', () => {
    expect(lottoResult.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('[getWinningNumbers] 설정한 보너스 번호를 가져올 수 있다.', () => {
    expect(lottoResult.getBonusNumber()).toEqual(7);
  });

  test('[getPrizeMoney] 숫자 3개가 일치하면 상금은 5,000을 반환한다.', () => {
    lottoResult.setMatchCount([{ count: 3, hasBonusNumber: false }]);

    const expectedPrizeMoney = GAME_REWARD.three * 1;
    expect(lottoResult.getPrizeMoney()).toBe(expectedPrizeMoney);
  });

  test('[getPrizeMoney] 숫자 5개, 보너스 번호가 일치하면 상금은 30,000,000을 반환한다.', () => {
    lottoResult.setMatchCount([{ count: 5, hasBonusNumber: true }]);

    const expectedPrizeMoney = GAME_REWARD.bonus * 1;
    expect(lottoResult.getPrizeMoney()).toBe(expectedPrizeMoney);
  });

  test('[getProfit] 투입 금액을 인자로 넣어 수익률을 계산하여 반환한다.', () => {
    const purchaseAmount = 8000;
    const expectedProfit = '62.5%';
    lottoResult.setMatchCount([{ count: 3, hasBonusNumber: false }]);

    expect(lottoResult.getProfit(purchaseAmount)).toBe(expectedProfit);
  });
});
