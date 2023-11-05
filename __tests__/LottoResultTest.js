import LottoResult from "../src/LottoResult.js";
import { LOTTO_PRICE } from "../src/utils/lottoConstants.js";

let lottoResult;

beforeEach(() => {
  lottoResult = new LottoResult();
  jest.restoreAllMocks();
});

describe("당첨 결과 테스트", () => {
  describe("일치하는 숫자 개수를 정확하게 반환", () => {
    test("모두 일치하는 경우", () => {
      const LOTTO = [1, 2, 3, 4, 5, 6];
      const WINNIMG_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 7;

      const matchedCount = lottoResult.getMatchedCount(
        LOTTO,
        WINNIMG_NUMBERS,
        BONUS_NUMBER
      );

      expect(matchedCount).toBe(6);
    });

    test("5개가 일치하고 보너스 넘버가 일치하는 경우", () => {
      const LOTTO = [1, 2, 3, 4, 5, 7];
      const WINNIMG_NUMBERS = [1, 2, 3, 4, 5, 6];
      const BONUS_NUMBER = 7;

      const matchedCount = lottoResult.getMatchedCount(
        LOTTO,
        WINNIMG_NUMBERS,
        BONUS_NUMBER
      );

      expect(matchedCount).toBe(5.5);
    });
  });

  test("일치하는 번호 수에 따라 당첨 횟수 업데이트", () => {
    const LOTTO_TICKETS = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const WINNIMG_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;

    lottoResult.updateWinningCounts(
      LOTTO_TICKETS,
      WINNIMG_NUMBERS,
      BONUS_NUMBER
    );

    expect(lottoResult.winningCounts["1등"]).toBe(0);
    expect(lottoResult.winningCounts["2등"]).toBe(0);
    expect(lottoResult.winningCounts["3등"]).toBe(0);
    expect(lottoResult.winningCounts["4등"]).toBe(0);
    expect(lottoResult.winningCounts["5등"]).toBe(1);
  });

  test("총 보상액을 올바르게 반환", () => {
    lottoResult.winningCounts["1등"] = 2;
    lottoResult.winningCounts["3등"] = 3;
    expect(lottoResult.calculateTotalReward()).toBe(
      2 * 2000000000 + 3 * 1500000
    );
  });

  test("수익률을 올바르게 계산", () => {
    lottoResult.calculateRateOfReturn(LOTTO_PRICE * 100, 100000);
    expect(lottoResult.rateOfReturn).toBe(
      ((100000 / (LOTTO_PRICE * 100)) * 100).toFixed(1)
    );
  });
});
