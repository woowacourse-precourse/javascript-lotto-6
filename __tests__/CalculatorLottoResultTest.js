import CalculatorLottoResult from "../src/domains/CalculatorLottoResult.js";
import User from "../src/domains/User.js";
import TargetLotto from "../src/domains/TargetLotto.js";
import Lotto from "../src/domains/Lotto.js";

describe("로또 결과 계산 클래스 테스트", () => {
  let calCulatorLottoResult;
  beforeAll(() => {
    const user = new User(2000);
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([2, 3, 4, 5, 6, 7]);
    user.buyLotto(lotto1, 1000);
    user.buyLotto(lotto2, 1000);
    const targetLotto = new TargetLotto([1, 2, 3, 4, 5, 6], 7);

    calCulatorLottoResult = new CalculatorLottoResult(user, targetLotto);
  });

  test("로또의 결과를 각 등수의 개수 배열로 반환한다.", () => {
    //when
    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();

    //then
    expect(lottoWinningCounts).toEqual([1, 1, 0, 0, 0]);
  });

  test("로또 당첨금액의 총액을 반환한다.", () => {
    //given
    const lottoWinningCounts = calCulatorLottoResult.getLottoWinningCount();

    //when
    const reulst = calCulatorLottoResult.getTotalProfit(lottoWinningCounts);

    //then
    expect(reulst).toEqual(2030000000);
  });
});
