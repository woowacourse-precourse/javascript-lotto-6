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
      const NO2_COUNT = 5.5;

      const matchedCount = lottoResult.getMatchedCount(
        LOTTO,
        WINNIMG_NUMBERS,
        BONUS_NUMBER
      );

      expect(matchedCount).toBe(NO2_COUNT);
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
    const FIRST_WINS_COUNT = 2;
    const THIRD_WINS_COUNT = 3;
    const NO1_PRIZE = 2000000000;
    const NO3_PRIZE = 1500000;

    lottoResult.winningCounts["1등"] = FIRST_WINS_COUNT;
    lottoResult.winningCounts["3등"] = THIRD_WINS_COUNT;

    expect(lottoResult.calculateTotalReward()).toBe(
      FIRST_WINS_COUNT * NO1_PRIZE + THIRD_WINS_COUNT * NO3_PRIZE
    );
  });

  test("수익률을 올바르게 계산", () => {
    const EARN_MONEY = 100000;
    const NUMBER_OF_LOTTO = 100;
    const BOUGHT_MONEY = NUMBER_OF_LOTTO * LOTTO_PRICE;
    const TO_PERCENTAGE = 100;

    lottoResult.calculateRateOfReturn(BOUGHT_MONEY, EARN_MONEY);
    expect(lottoResult.rateOfReturn).toBe(
      ((EARN_MONEY / BOUGHT_MONEY) * TO_PERCENTAGE).toFixed(1)
    );
  });
});
