import LottoResultChecker from "../src/services/LottoResultChecker.js";

describe("LottoResultChecker", () => {
  describe("당첨 결과 생성 메서드 테스트", () => {
    test("하나도 일치하지 않으면 result는 None이어야 한다.", () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const win = [7, 8, 9, 10, 11, 12];
      const bonus = 13;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("None");
    });

    test("result는 3개 일치 (5,000원)이어야 한다.", () => {
      const numbers = [1, 2, 3, 14, 15, 16];
      const win = [1, 2, 3, 10, 11, 12];
      const bonus = 13;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("3개 일치 (5,000원)");
    });

    test("result는 4개 일치 (50,000원)이어야 한다.", () => {
      const numbers = [1, 2, 3, 14, 15, 16];
      const win = [1, 2, 3, 10, 11, 14];
      const bonus = 13;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("4개 일치 (50,000원)");
    });

    test("result는 5개 일치 (1,500,000원)이어야 한다.", () => {
      const numbers = [1, 2, 3, 14, 15, 16];
      const win = [1, 2, 3, 10, 14, 15];
      const bonus = 13;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("5개 일치 (1,500,000원)");
    });

    test("result는 5개 일치, 보너스 볼 일치 (30,000,000원)이어야 한다.", () => {
      const numbers = [1, 2, 3, 14, 15, 16];
      const win = [1, 2, 3, 10, 14, 15];
      const bonus = 16;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("5개 일치, 보너스 볼 일치 (30,000,000원)");
    });

    test("result는 6개 일치 (2,000,000,000원)이어야 한다.", () => {
      const numbers = [1, 2, 3, 14, 15, 16];
      const win = [1, 2, 3, 14, 15, 16];
      const bonus = 7;
      const result = LottoResultChecker.checkResult(numbers, { win, bonus });
      expect(result).toBe("6개 일치 (2,000,000,000원)");
    });
  });
});
