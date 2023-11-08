import Checker from "./Checker";

describe("Checker", () => {
  let checker;

  beforeEach(() => {
    checker = new Checker();
  });

  describe("checkPrice", () => {
    test("유효하지 않은 구입금액을 입력하면 에러를 던져야 합니다", () => {
      expect(() => {
        checker.checkPrice("abc");
      }).toThrowError("[ERROR] : 잘못된 구입금액입니다.");

      expect(() => {
        checker.checkPrice(2000.5);
      }).toThrowError("[ERROR] : 잘못된 구입금액입니다.");

      expect(() => {
        checker.checkPrice(0);
      }).toThrowError("[ERROR] : 잘못된 구입금액입니다.");

      expect(() => {
        checker.checkPrice(1500);
      }).toThrowError("[ERROR] : 잘못된 구입금액입니다.");
    });

    test("유효한 구입금액을 입력하면 에러를 던지지 않아야 합니다", () => {
      expect(() => {
        checker.checkPrice(3000);
      }).not.toThrowError();

      expect(() => {
        checker.checkPrice(5000);
      }).not.toThrowError();
    });
  });

  describe("checkWinningNumber", () => {
    test("유효하지 않은 당첨 번호를 입력하면 에러를 던져야 합니다", () => {
      expect(() => {
        checker.checkWinningNumber([1, 2, 3, 4, 5]);
      }).toThrowError("[ERROR] : 6개의 숫자를 입력해주세요");

      expect(() => {
        checker.checkWinningNumber([1, 2, 3, 4, 5, 5]);
      }).toThrowError("[ERROR] : 중복된 숫자가 있습니다");

      expect(() => {
        checker.checkWinningNumber([1, 2, "abc", 4, 5, 6]);
      }).toThrowError("[ERROR] : 잘못된 로또 입력값입니다");
    });

    test("유효한 당첨 번호를 입력하면 에러를 던지지 않아야 합니다", () => {
      expect(() => {
        checker.checkWinningNumber([1, 2, 3, 4, 5, 6]);
      }).not.toThrowError();

      expect(() => {
        checker.checkWinningNumber([11, 22, 33, 44, 45, 6]);
      }).not.toThrowError();
    });
  });

  describe("checkBonus", () => {
    test("유효하지 않은 보너스 번호를 입력하면 에러를 던져야 합니다", () => {
      expect(() => {
        checker.checkBonus([1, 2, 3, 4, 5, 6], 0);
      }).toThrowError("[ERROR] : 잘못된 로또 입력값입니다");

      expect(() => {
        checker.checkBonus([1, 2, 3, 4, 5, 6], 7);
      }).toThrowError("[ERROR] : 잘못된 로또 입력값입니다");

      expect(() => {
        checker.checkBonus([1, 2, 3, 4, 5, 6], "abc");
      }).toThrowError("[ERROR] : 잘못된 로또 입력값입니다");
    });

    test("유효한 보너스 번호를 입력하면 에러를 던지지 않아야 합니다", () => {
      expect(() => {
        checker.checkBonus([1, 2, 3, 4, 5, 6], 7);
      }).not.toThrowError();

      expect(() => {
        checker.checkBonus([1, 2, 3, 4, 5, 6], 45);
      }).not.toThrowError();
    });
  });
});
