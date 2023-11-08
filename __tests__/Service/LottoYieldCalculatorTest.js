import LottoYieldCalculator from "../../src/service/LottoYieldCalculator.js";

describe("LottoYieldCalculator 클래스 테스트", () => {
  let calculator;
  let settingsMock;
  let resultMock;
  let purchaseAmountMock;

  beforeEach(() => {
    settingsMock = {
      getPrizeForRank: jest.fn().mockImplementation((rank) => {
        const prizes = {
          FIRST_PRIZE: 2000000000,
          SECOND_PRIZE: 30000000,
          THIRD_PRIZE: 1500000,
          FOURTH_PRIZE: 50000,
          FIFTH_PRIZE: 5000,
        };
        return prizes[rank];
      }),
      getAllPrizeDetails: jest.fn().mockReturnValue({
        FIRST_PRIZE: { prize: 2000000000, matchNum: 6 },
      }),
    };

    calculator = new LottoYieldCalculator(settingsMock);

    resultMock = {
      FIRST_PRIZE: 1,
      SECOND_PRIZE: 0,
      THIRD_PRIZE: 0,
      FOURTH_PRIZE: 0,
      FIFTH_PRIZE: 0,
    };

    purchaseAmountMock = {
      getAmount: jest.fn().mockReturnValue(1000),
    };
  });

  test("총 상금 계산이 올바른지 테스트", () => {
    const expectedTotalPrize = 2000000000;
    const totalPrize = calculator.getTotalPrize(resultMock);

    expect(totalPrize).toBe(expectedTotalPrize);
  });

  test("수익률 계산이 정확한지 테스트", () => {
    const expectedYieldRate = Number(((2000000000 / 1000) * 100).toFixed(2));

    const yieldRate = calculator.calculateYieldRate(
      resultMock,
      purchaseAmountMock.getAmount()
    );

    expect(yieldRate).toBe(expectedYieldRate);
  });

  test("당첨된 로또들 결과를 리턴해야한다.", () => {
    const lottosNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];
    const drawnLotto = {
      getFullNumbers: () => ({
        drawnLottoNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      }),
    };
    const result = calculator.getResult(lottosNumbers, drawnLotto);
    expect(result.SECOND_PRIZE).toBe(1);
    expect(result.FIRST_PRIZE).toBe(1);
  });
});
