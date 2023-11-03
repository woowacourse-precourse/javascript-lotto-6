import UI from "../src/UI";
import { getLogSpy, mockQuestions } from "../test-utils";

describe("UI 클래스 테스트", () => {
  describe("입력 테스트", () => {
    test("구매금액을 입력받으면 숫자로 변환된 금액을 반환한다", async () => {
      // given
      mockQuestions(["10000"]);

      // when
      const ui = new UI();
      const amount = await ui.askAmountForPurchase();

      // then
      expect(amount).toBe(10000);
    });

    test("당첨번호를 입력받으면 당첨번호가 담긴 숫자 배열을 반환한다", async () => {
      // given
      mockQuestions(["1,2,3,4,5,6"]);

      // when
      const ui = new UI();
      const winningnumbers = await ui.askWinningNumbers();

      // then
      expect(winningnumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("중복되지 않은 보너스 로또번호를 입력받으면 숫자로 변환된 로또번호를 반환한다", async () => {
      // given
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      mockQuestions(["7"]);

      // when
      const ui = new UI();
      const bonusLottoNumber = await ui.askBonusLottoNumber(winningNumbers);

      // then
      expect(bonusLottoNumber).toBe(7);
    });
  });

  describe("출력 테스트", () => {
    test("로또 수량 및 번호를 출력한다", async () => {
      const logSpy = getLogSpy();
      const LOTTO_INFORMATIONS = [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
      ];

      const ui = new UI();
      ui.printLottoPurchaseInformation(LOTTO_INFORMATIONS);

      const logs = [
        "3개를 구매했습니다.",
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
      ];

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
