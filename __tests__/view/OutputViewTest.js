import OutputView from "../../src/views/OutputView.js";
import { Random } from "@woowacourse/mission-utils";

describe("OutputView 객체 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockRandoms = (numbers) => {
    Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

  const mockLottoGame = {
    cost: 8000,
    amount: 8,
    lottos: [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ],
    winningNumbers: [1, 2, 3, 4, 5, 6],
    bonusNumber: 7,
    winningResults: [
      { history: "3개 일치", price: 5000, ticket: 1 },
      { history: "4개 일치", price: 50000, ticket: 0 },
      { history: "5개 일치", price: 1500000, ticket: 0 },
      { history: "5개 일치, 보너스 볼 일치", price: 30000000, ticket: 0 },
      { history: "6개 일치", price: 2000000000, ticket: 0 },
    ],
    totalProfit: 5000,
    profitRatio: 62.5,
  };

  describe("로또 구매 내역 출력 테스트", () => {
    test("발행한 로또 수량 출력", () => {
      const expected = `${mockLottoGame.amount}개를 구매했습니다.`;
      const result = OutputView.printAmount(mockLottoGame.cost);

      expect(result).toHaveBeenCalledWith(expected);
    });

    test("수량에 따른 발행한 여러 로또 출력", () => {
      mockRandoms(mockLottoGame.lottos);

      const expected =
        "[8, 21, 23, 41, 42, 43]\n[3, 5, 11, 16, 32, 38]\n[7, 11, 16, 35, 36, 44]\n[1, 8, 11, 31, 41, 42]\n[13, 14, 16, 38, 42, 45]\n[7, 11, 30, 40, 42, 43]\n[2, 13, 22, 32, 38, 45]\n[1, 3, 5, 14, 22, 45]";
      const result = OutputView.printLottos(mockLottoGame.lottos);

      expect(result).toHaveBeenCalledWith(expected);
    });
  });

  describe("당첨 통계 출력 테스트", () => {
    test("당첨 내역 출력", () => {
      const expected =
        "3개 일치 (5,000원) - 1개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개\n";
      const result = OutputView.printWinningResult(
        mockLottoGame.winningResults
      );

      expect(result).toHaveBeenCalledWith(`당첨 통계\n---\n${expected}`);
    });

    test("수익률 출력", () => {
      const expected = `총 수익률은 ${mockLottoGame.profitRatio}%입니다.`;
      const result = OutputView.printProfitRatio(mockLottoGame.totalProfit);

      expect(result).toHaveBeenCalledWith(expected);
    });
  });
});
