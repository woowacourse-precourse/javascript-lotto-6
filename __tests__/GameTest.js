import Game from "../src/Game.js";
import { RANGE, PRIZE } from "../src/constant/NUMBER.js";
import { purchaseSize } from "../src/utils/purchaseSize";

describe("Game 클래스 테스트", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  test("구입 금액만큼 로또 번호가 발행됐는지 테스트한다.", () => {
    const price = "5000";
    const size = purchaseSize(price);
    const drawingLotto = game.drawLotto(price);

    expect(drawingLotto).toHaveLength(size);
  });

  test("발행한 로또 번호가 유효한 숫자 범위 내에 있는지 테스트한다.", () => {
    const drawingLotto = game.drawLotto("3000");
    const flatLotto = drawingLotto.flat();

    for (const number of flatLotto) {
      expect(number).toBeGreaterThanOrEqual(RANGE.MIN);
      expect(number).toBeLessThanOrEqual(RANGE.MAX);
    }
  });

  test("당첨 현황을 계산하는 메서드를 테스트한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const drawingLotto = [[3, 4, 5, 6, 7, 8]];
    const bonusNumber = 9;
    const matchingResults = game.getLottoResults(
      lotto,
      drawingLotto,
      bonusNumber
    );

    expect(matchingResults).toEqual([0, 1, 0, 0, 0]);
  });

  test("5개가 일치할 때 보너스 볼 일치 현황도 계산하는지 테스트한다.", () => {
    const lotto = [2, 3, 4, 5, 6, 7];
    const drawingLotto = [[1, 2, 3, 4, 5, 6]];
    const bonusNumber = 1;
    const matchingBonusBall = game.getLottoResults(
      lotto,
      drawingLotto,
      bonusNumber
    );

    expect(matchingBonusBall).toEqual([0, 0, 1, 0, 1]);
  });

  test("수익률 계산 메서드를 테스트한다.", () => {
    const matchingResults = [1, 0, 0, 0, 0];
    const purchasePrice = 8000;
    const earningRate = game.getEarningRate(
      PRIZE,
      matchingResults,
      purchasePrice
    );

    expect(earningRate).toBe("62.5");
  });
});
