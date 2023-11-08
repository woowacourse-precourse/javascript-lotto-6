import App from "../src/App.js";

describe("계산 테스트", () => {
  test("당첨 금액의 합 테스트", async () => {
    const MOCK_APP = new App();
    const MOCK_NUMBER_OF_WINS = { 3: 1, 4: 2, 5: 1, 6: 0, bonus: 1 };
    const PRIZE_TEST = MOCK_APP.getPrizeValue(MOCK_NUMBER_OF_WINS);
    expect(PRIZE_TEST).toBe(31605000);
  });

  test("수익률 계산 테스트", async () => {
    const MOCK_APP = new App();
    const MOCK_PRIZE_VALUE = 31605000;
    const MOCK_CASH = 20000;
    const RATE_OF_RETURN_TEST = MOCK_APP.getRateOfReturn(
      MOCK_PRIZE_VALUE,
      MOCK_CASH
    );
    expect(RATE_OF_RETURN_TEST).toBe("158025.0");
  });
});
