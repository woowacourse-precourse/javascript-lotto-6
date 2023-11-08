import PRIZE_MONEY from "../../src/constants/PrizeMoney"
import PURCHASE_UNIT from "../../src/constants/PurchaseUnit";
import LottoWinStatistics from "../../src/domain/LottoWinStatistics";

describe('수익통계 클래스 테스트', () => {
  test('3개의 티켓으로 3, 4, 5등을 하면 수익률은 518.3%입니다.', () => {
    // given
    const lottoWinStatistics = new LottoWinStatistics();

    lottoWinStatistics.pushPrize(PRIZE_MONEY.THIRD);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.FOURTH);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.FIFTH);
    
    const answer = "51833.3";

    // when
    lottoWinStatistics.calculateReturnRate(PURCHASE_UNIT * 3);

    // then
    expect(lottoWinStatistics.getReturnRate()).toEqual(answer);
  });

  test('5개의 티켓으로 5등을 한 번 하면 수익률은 100.0%입니다.', () => {
    // given
    const lottoWinStatistics = new LottoWinStatistics();

    lottoWinStatistics.pushPrize(PRIZE_MONEY.NOTHING);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.NOTHING);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.NOTHING);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.NOTHING);
    lottoWinStatistics.pushPrize(PRIZE_MONEY.FIFTH);

    const answer = "100.0";

    // when
    lottoWinStatistics.calculateReturnRate(PURCHASE_UNIT * 5);

    // then
    expect(lottoWinStatistics.getReturnRate()).toEqual(answer);
  });
});
