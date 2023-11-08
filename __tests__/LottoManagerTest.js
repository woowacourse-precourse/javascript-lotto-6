import Lotto from "../src/core/Lotto.js";
import LottoManager from "../src/core/managers/LottoManager.js";
import { mockRandoms } from "./utils.js";

describe("LottoManager 클래스 테스트", () => {
  /** @type {LottoManager} */
  let lottoManager;

  beforeEach(() => {
    jest.restoreAllMocks();
    lottoManager = new LottoManager();
  });

  test("로또 번호들을 개수만큼 만드는 기능 테스트", () => {
    function isAllLottos(lottos) {
      const realLottos = lottos.filter((lotto) => lotto instanceof Lotto);
      return realLottos.length === lottos.length;
    }

    const inputs = [4, 6];

    inputs.forEach((input) => {
      const lottos = lottoManager.makeLottos(input);
      const makeCorrectly = isAllLottos(lottos);

      expect(makeCorrectly).toBe(true);
      expect(lottos.length === input).toBe(true);
    });
  });

  test("모든 로또에 대해 통계내는 기능 테스트", () => {
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const answer = {
      three: 1,
      four: 1,
      five: 1,
      bonusFive: 1,
      six: 1,
    };

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 11, 10],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 10, 11, 12, 13],
      [7, 10, 11, 12, 13, 14],
      [10, 11, 12, 13, 14, 15],
    ]);

    lottoManager.makeLottos(8);
    const board = lottoManager.makeResultBoard(winning, bonus);
    expect(board).toEqual(answer);
  });
});
