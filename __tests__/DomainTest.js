import { Console, Random } from "@woowacourse/mission-utils";

import Domain from "../src/Domain.js";
import MESSAGES from "../src/constants/messages.js";

describe("Domain 클래스 테스트", () => {
  let domain;
  let printMockFn;

  beforeAll(() => {
    domain = new Domain();
    printMockFn = jest.spyOn(Console, "print");
  });

  describe("purchaseLottos 메서드 테스트", () => {
    test("빈 값이 들어오면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.purchaseLottos("");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_NO_INPUT)
      );
    });

    test("옳지 않은 구매 금액이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.purchaseLottos("1001");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_PURCHASING_NUMBER)
      );
    });

    test("올바른 구매 금액이 입력되면, 1000원당 한 장의 로또가 #lottos 배열에 할당되고 true를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.purchaseLottos("1000");

      expect(result).toEqual(true);
      expect(domain.getLottos.length).toEqual(1);
    });
  });

  describe("setWinnings 메서드 테스트", () => {
    test("빈 값이 들어오면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_NO_INPUT)
      );
    });

    test("공백 있는 값이 들어오면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("1, 2");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_WINNING_NUMBERS_WHITESPACE)
      );
    });

    test("중복되는 값이 있으면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("1,2,3,3,4,5");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(
          MESSAGES.ERROR_INPUT_WINNING_NUMBERS_REPEATATION
        )
      );
    });

    test("숫자형이 아닌 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("1,2,3,x,5,6");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_WINNING_NUMBERS)
      );
    });

    test("1보다 작은 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("-1,2,3,4,5,6");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_WINNING_NUMBERS)
      );
    });

    test("45보다 큰 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("1,2,3,4,5,56");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_WINNING_NUMBERS)
      );
    });

    test("올바른 당첨 번호 값이 입력되면, 당첨 번호 배열을 세팅하고 true를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setWinnings("1,2,3,4,5,6");

      expect(result).toEqual(true);
      expect(domain.getWinnings).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("setBonus 메서드 테스트", () => {
    test("빈 값이 들어오면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setBonus("");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_NO_INPUT)
      );
    });

    test("당첨 번호에 있는 값을 입력하면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      domain.setWinnings("1,2,3,4,5,6");
      const result = domain.setBonus("3");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_BONNUS_NUMBER_REPEATATION)
      );
    });

    test("숫자형이 아닌 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setBonus("x");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_BONUS_NUMBERS)
      );
    });

    test("1보다 작은 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setBonus("-1");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_BONUS_NUMBERS)
      );
    });

    test("45보다 큰 값이 입력되면, 에러를 콘솔로 찍고 false를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setBonus("56");

      expect(result).toEqual(false);
      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining(MESSAGES.ERROR_INPUT_BONUS_NUMBERS)
      );
    });

    test("올바른 보너스 번호 값이 입력되면, 보너스 번호를 세팅하고 true를 리턴한다.", () => {
      printMockFn.mockClear();
      const result = domain.setBonus("7");

      expect(result).toEqual(true);
      expect(domain.getBonus).toEqual(7);
    });
  });

  describe("setLotteryResult, announceLottery, announceProfit 메서드 테스트", () => {
    beforeAll(() => {
      printMockFn.mockClear();

      const randomMockFn = jest.spyOn(Random, "pickUniqueNumbersInRange");
      randomMockFn.mockReturnValue([3, 4, 5, 6, 7, 8]);

      domain.purchaseLottos("1000");
      domain.setWinnings("1,2,3,4,5,6");
      domain.setBonus("7");
    });

    test("setLotteryResult 메서드로 당첨 결과 배열을 세팅할 수 있다.", () => {
      domain.setLotteryResult();

      expect(domain.getLotteryResults).toEqual([0, 1, 0, 0, 0]);
    });

    test("announceLottery 메서드로 당첨 결과를 콘솔에 반환받을 수 있다.", () => {
      printMockFn.mockClear();

      const logs = [
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 2개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
      ];

      domain.announceLottery();

      logs.forEach((log) => {
        expect(printMockFn).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("announceProfit 메서드로 수익률을 콘솔에 반환받을 수 있다.", () => {
      printMockFn.mockClear();

      domain.announceProfit();

      expect(printMockFn).toHaveBeenCalledWith(
        expect.stringContaining("총 수익률은 10000.0%입니다.")
      );
    });
  });
});
