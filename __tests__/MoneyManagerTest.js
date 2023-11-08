import MoneyManager from "../src/core/managers/MoneyManager.js";

describe("MoneyManager 클래스 테스트", () => {
  /** @type {MoneyManager} */
  let moneyManager;

  beforeEach(() => {
    moneyManager = new MoneyManager();
  });

  test("총 수익금 계산 테스트", () => {
    const inputs = [
      {
        three: 2,
        four: 0,
        five: 0,
        bonusFive: 8,
        six: 1,
      },
      {
        three: 0,
        four: 2,
        five: 7,
        bonusFive: 0,
        six: 0,
      },
    ];
    const answers = [2240010000, 10600000];

    inputs.forEach((input, index) => {
      const returns = moneyManager.calculateTotalReturns(input);
      expect(returns).toBe(answers[index]);
    });
  });

  test("수익률 계산 테스트", () => {
    const inputs = [500, 1000, 2000];
    const answers = [50, 100, 200];

    moneyManager.setPurchaseValue(1000);

    inputs.forEach((input, index) => {
      const returns = moneyManager.calculateReturnRate(input);
      expect(returns).toBe(answers[index]);
    });
  });
});
