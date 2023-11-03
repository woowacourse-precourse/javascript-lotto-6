import { mockRandoms } from "../test-utils.js";
import LottoMachine from "../src/LottoMachine.js";
import Lotto from "../src/Lotto.js";

describe("LottoMachine 클래스 테스트", () => {
  test("로또를 판매한다.", () => {
    const AMOUNT = 3000;
    const RANDOM_LOTTO_ONE = [6, 4, 3, 5, 1, 2];
    const RANDOM_LOTTO_TWO = [17, 14, 15, 19, 20, 21];
    const RANDOM_LOTTO_THREE = [27, 24, 25, 29, 30, 31];

    mockRandoms([RANDOM_LOTTO_ONE, RANDOM_LOTTO_TWO, RANDOM_LOTTO_THREE]);

    const machine = new LottoMachine();

    const lotteries = machine.sell(AMOUNT);

    for (const lotto of lotteries) {
      expect(lotto).toBeInstanceOf(Lotto);
    }
  });
});
