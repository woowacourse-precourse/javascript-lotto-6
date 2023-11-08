import CalculatorLottoResult from "../../src/domains/CalculatorLottoResult.js";
import User from "../../src/domains/User.js";
import TargetLotto from "../../src/domains/TargetLotto.js";
import Lotto from "../../src/domains/Lotto.js";

describe("로또 결과 계산 클래스 테스트", () => {
  let calCulatorLottoResult;
  beforeAll(() => {
    const user = new User(2000);
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    user.buyLotto(lotto1, 1000);
    user.buyLotto(lotto2, 1000);
    const targetLotto = new TargetLotto([1, 2, 3, 40, 41, 42], 7);

    calCulatorLottoResult = new CalculatorLottoResult(user, targetLotto);
  });

  test("로또의 결과를 각 등수의 개수 배열로 반환한다.", () => {
    //when
    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();

    //then
    expect(lottoWinningCounts).toEqual([0, 0, 0, 0, 1]);
  });

  test("로또 당첨금액의 총액을 반환한다.", () => {
    //given
    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();

    //when
    const profit = calCulatorLottoResult.getTotalProfit(lottoWinningCounts);

    //then
    expect(profit).toEqual(5000);
  });

  test("사용금액에 대한 당첨금액의 수익률을 소수점 둘째 자리에서 반올림해 반환한다.", () => {
    //given
    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();
    const profit = calCulatorLottoResult.getTotalProfit(lottoWinningCounts);

    //when
    const totalProfitRate = calCulatorLottoResult.getTotalProfitRate(profit);

    //then
    expect(totalProfitRate).toEqual(250);
  });
});
