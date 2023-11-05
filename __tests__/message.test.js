import { LOTTO } from "../src/constants/lotto.js";
import { ResultMessage } from "../src/utils/message.js";
import { getLottoNumbers } from "./LottoTest.js";

describe("ResultMessage Test", () => {
  test("로또 구매 내역 메시지", () => {
    const numbers = getLottoNumbers(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
    const lottos = new Array(5).fill(numbers);

    const message = ResultMessage.purchaseLottos(lottos);

    expect(message).toEqual(expect.stringContaining("5개를 구매했습니다."));
    expect(message).toEqual(expect.stringContaining(`[${numbers.join(", ")}]`));
  });

  test("로또 당첨 통계 메시지", () => {
    const message = ResultMessage.lottoResult([0, 0, 0, 0, 1]);

    expect(message).toEqual(expect.stringContaining("당첨 통계"));
    expect(message).toEqual(expect.stringContaining("---"));
    expect(message).toEqual(expect.stringContaining(`3개 일치 (5,000원) - 1개`));
    expect(message).toEqual(
      expect.stringContaining(`5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`)
    );
  });
});
