import Lotto from "../src/core/Lotto.js";
import LottoManager from "../src/core/managers/LottoManager.js";

describe("LottoManager 클래스 테스트", () => {
  /** @type {LottoManager} */
  let lottoManager;

  beforeEach(() => {
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
});
