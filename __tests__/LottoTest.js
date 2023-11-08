import Lotto from "../src/Lotto.js";
import User from "../src/User.js";
import App from "../src/App.js";
import Match from "../src/Match.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import {
  INPUT_NUMBER_ERROR_MESSAGE,
  INPUT_DUPLICATE_ERROR_MESSAGE,
  NUMS,
  CORRECTS,
  MONEYS,
  INPUT_MONEY_ERROR_MESSAGE,
  CORRECT_COUNT,
  YIELD_HEAD,
  YIELD_TAIL,
} from "../src/Constants.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto();
      lotto.validate([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(INPUT_NUMBER_ERROR_MESSAGE);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto();
      lotto.validate([1, 2, 3, 4, 6, 6]);
    }).toThrow(INPUT_DUPLICATE_ERROR_MESSAGE);
  });
});

describe("로또 구매 테스트", () => {
  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate(500);
    }).toThrow(INPUT_MONEY_ERROR_MESSAGE);
  });

  test("구입 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate(-1000);
    }).toThrow(INPUT_MONEY_ERROR_MESSAGE);
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.validate("hi");
    }).toThrow(INPUT_MONEY_ERROR_MESSAGE);
  });
});

describe("로또 발행 테스트", () => {
  test("8000원을 입력하면 8개의 로또 발행 메시지를 출력한다.", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const user = new User();
    user.calculateCount(8000);
    expect(consoleSpy).toHaveBeenCalledWith("\n8개를 구매했습니다.");
    consoleSpy.mockRestore();
  });

  test("2개의 랜덤 로또를 발행한다.", () => {
    const mockPickUniqueNumbersInRange = jest.spyOn(
      MissionUtils.Random,
      "pickUniqueNumbersInRange"
    );
    mockPickUniqueNumbersInRange
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([7, 8, 9, 10, 11, 12]);
    const consoleSpy = jest.spyOn(console, "log");
    const user = new User();
    user.createLotto(2);
    expect(consoleSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    expect(consoleSpy).toHaveBeenCalledWith("[7, 8, 9, 10, 11, 12]");
    consoleSpy.mockRestore();
    mockPickUniqueNumbersInRange.mockRestore();
  });
});

describe("당첨 번호 비교 테스트", () => {
  test("1등 당첨 테스트", () => {
    const match = new Match();
    const CORRECT = [1, 2, 3, 4, 5, 6];
    const numbers = [1, 2, 3, 4, 5, 6];
    const BONUS = 7;
    const result = match.matching(CORRECT, numbers, BONUS);

    expect(result).toEqual([6, false]);
  });

  test("2등 당첨 테스트", () => {
    const match = new Match();
    const CORRECT = [1, 2, 3, 4, 5, 6];
    const numbers = [1, 2, 3, 4, 5, 7];
    const BONUS = 7;
    const result = match.matching(CORRECT, numbers, BONUS);

    expect(result).toEqual([5, true]);
  });
});

describe("통계 테스트", () => {
  test("모두 0개 일치일 때 출력 테스트", async () => {
    const app = new App();

    const STATS = {
      MATCH_THREE: 0,
      MATCH_FOUR: 0,
      MATCH_FIVE: 0,
      MATCH_BONUS: 0,
      MATCH_ALL: 0,
    };

    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    await app.printStats(STATS);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "");
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      NUMS[0] + CORRECTS + MONEYS[0] + " - " + 0 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      3,
      NUMS[1] + CORRECTS + MONEYS[1] + " - " + 0 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      4,

      NUMS[2] + CORRECTS + MONEYS[2] + " - " + 0 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      5,

      NUMS[3] + CORRECTS + MONEYS[3] + " - " + 0 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      6,
      NUMS[4] + CORRECTS + MONEYS[4] + " - " + 0 + CORRECT_COUNT
    );

    consoleSpy.mockRestore();
  });

  test("각각 1,2,3,4,5,개 일치일 때 출력 테스트", async () => {
    const app = new App();

    const STATS = {
      MATCH_THREE: 1,
      MATCH_FOUR: 2,
      MATCH_FIVE: 3,
      MATCH_BONUS: 4,
      MATCH_ALL: 5,
    };

    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    await app.printStats(STATS);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "");
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      NUMS[0] + CORRECTS + MONEYS[0] + " - " + 1 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      3,
      NUMS[1] + CORRECTS + MONEYS[1] + " - " + 2 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      4,

      NUMS[2] + CORRECTS + MONEYS[2] + " - " + 3 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      5,

      NUMS[3] + CORRECTS + MONEYS[3] + " - " + 4 + CORRECT_COUNT
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      6,
      NUMS[4] + CORRECTS + MONEYS[4] + " - " + 5 + CORRECT_COUNT
    );

    consoleSpy.mockRestore();
  });
});

describe("수익률 테스트 테스트", () => {
  test("소수점 둘째짜리 반올림 확인 테스트", () => {
    const app = new App();

    const STATS = {
      MATCH_THREE: 0,
      MATCH_FOUR: 0,
      MATCH_FIVE: 0,
      MATCH_BONUS: 0,
      MATCH_ALL: 0,
    };

    const MONEY = 1000;

    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    app.printYield(STATS, MONEY);

    expect(consoleSpy).toHaveBeenCalledWith(YIELD_HEAD + "0.0" + YIELD_TAIL);

    consoleSpy.mockRestore();
  });

  test("수익률 계산 확인 테스트", () => {
    const app = new App();

    const STATS = {
      MATCH_THREE: 0,
      MATCH_FOUR: 2,
      MATCH_FIVE: 0,
      MATCH_BONUS: 0,
      MATCH_ALL: 0,
    };

    const MONEY = 50000;

    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    app.printYield(STATS, MONEY);

    expect(consoleSpy).toHaveBeenCalledWith(YIELD_HEAD + "200.0" + YIELD_TAIL);

    consoleSpy.mockRestore();
  });
});
