import { MissionUtils } from "@woowacourse/mission-utils";
import LOTTO from "../src/constants/LOTTO";
import LottoGame from "../src/game/LottoGame";

const mockLottos = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 게임 클래스 테스트", () => {
  test("LottoGame 인스턴스 생성", () => {
    const lottoGame = new LottoGame(14000);
    expect(lottoGame).toBeInstanceOf(LottoGame);
    expect(lottoGame.countOfLotto).toBe(14);
    expect(lottoGame.results).toBe(LOTTO.RESULTS);
  });
  test("로또 발행", () => {
    const lottoGame = new LottoGame(14000);
    lottoGame.createLottos();
    expect(lottoGame.lottos.length).toBe(14);
  });
  test("당첨 결과 계산", () => {
    mockLottos([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 11, 12],
      [1, 2, 3, 14, 15, 16],
    ]);
    const lottoGame = new LottoGame(5000);
    lottoGame.createLottos();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoGame.calculateResult(winningNumbers, bonusNumber);
    expect(lottoGame.results).toEqual([
      { rank: "FIFTH", count: 1 },
      { rank: "FOURTH", count: 1 },
      { rank: "THIRD", count: 1 },
      { rank: "SECOND", count: 1 },
      { rank: "FIRST", count: 1 },
    ]);
  });
});
