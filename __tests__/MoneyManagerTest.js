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
});
