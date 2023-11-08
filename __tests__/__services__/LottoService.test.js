import { MESSAGES } from "../../src/constants";
import { LottoService } from "../../src/service";
import { getLogSpy, mockQuestions, mockRandoms } from "../../src/utils";

describe("LottoService 테스트", () => {
  test("당첨 통계 출력 테스트", async () => {
    // given
    const {
      PREFIX,
      1: one,
      2: two,
      3: three,
      4: four,
      5: five,
      SUFFIX,
    } = MESSAGES.WINNING_STATISTICS;
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 10, 15, 33, 42, 13],
      [1, 2, 3, 13, 15, 16],
    ];

    const logSpy = getLogSpy();
    const lottoService = new LottoService();
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);
    mockRandoms(lottos);

    // when
    await lottoService.buyLottos();
    await lottoService.drawLotto();
    lottoService.printResult();

    // then
    await expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        PREFIX,
        five(1),
        four(0),
        three(0),
        two(0),
        one(0),
        SUFFIX(166.7)
      )
    );
  });
});
