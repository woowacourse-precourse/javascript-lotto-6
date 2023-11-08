import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import LottoGame from "../src/LottoGame.js";

jest.mock("../src/Lotto.js");

describe("로또 게임 클래스 테스트", () => {
  beforeEach(() => {
    Lotto.mockClear();
  });

  test("1000원 당 한 장의 로또를 발행한다.", () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseLotto(2000);
    expect(Lotto).toHaveBeenCalledTimes(2);
  });
});
