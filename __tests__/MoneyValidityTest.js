import MoneyValidity from "../src/Domain/MoneyValidity.js";

describe("구매금액 테스트", () => {
    test("숫자를 입력했는지 테스트", () => {
      const INPUT = "1000a";
      const MONEY_VALIDITY = new MoneyValidity();
      expect(() => MONEY_VALIDITY.inputMoneyValidity(INPUT)).toThrow("[ERROR]");
    });
  
    test("1000으로 나누어 떨어지는지 테스트", () => {
      const INPUT = 14003;
      const MONEY_VALIDITY = new MoneyValidity();
      expect(() => MONEY_VALIDITY.inputMoneyValidity(INPUT)).toThrow("[ERROR]");
    });
  });
  