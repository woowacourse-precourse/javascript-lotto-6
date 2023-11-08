import LottoGame from "../../src/domain/LottoGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("LottoGame 클래스 테스트", () => {
  /** @type {LottoGame} */
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  test("구입금액에 따른 구입가능수량 계산 테스트 (calculatePurchaseQuantity)", () => {
    const purchaseAmount = 14000;
    const expected = 14;

    lottoGame.setPurchaseAmount(purchaseAmount);
    lottoGame.calculatePurchaseQuantity();

    expect(lottoGame.getPurchaseQuantity()).toBe(expected);
  });

  test("티켓 생성 개수 테스트 (generateTickets)", () => {
    const purchaseAmount = 2000;
    const expected = 2;

    lottoGame.setPurchaseAmount(purchaseAmount);
    lottoGame.calculatePurchaseQuantity();
    lottoGame.generateTickets();

    expect(lottoGame.getTickets().length).toBe(2);
  });

  test("티켓 생성 및 번호 정렬 테스트 (generateTickets)", () => {
    const purchaseAmount = 1000;
    const randoms = [[6, 5, 4, 3, 2, 1]];
    const expected = [1, 2, 3, 4, 5, 6];

    mockRandoms(randoms);

    lottoGame.setPurchaseAmount(purchaseAmount);
    lottoGame.calculatePurchaseQuantity();
    lottoGame.generateTickets();

    expect(lottoGame.getTickets()[0].getNumbers()).toEqual(expected);
  });

  test("티켓의 당첨 등수 계산 테스트 (evaluateTickets).", () => {
    const purchaseAmount = 8000;
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
      [1, 2, 42, 43, 44, 45],
      [1, 41, 42, 43, 44, 45],
      [40, 41, 42, 43, 44, 45]
    ];
    const expected = [1, 2, 3, 4, 5, 0, 0, 0];

    mockRandoms(randoms);

    lottoGame.setPurchaseAmount(purchaseAmount);
    lottoGame.calculatePurchaseQuantity();
    lottoGame.generateTickets();
    lottoGame.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoGame.setBonusNumber(7);
    lottoGame.evaluateTickets();

    expect(lottoGame.getTickets().map(ticket => ticket.getPrizeRank())).toEqual(expected);
  });

  test("수익률 계산 테스트 (calculateEarningsRate).", () => {
    const purchaseAmount = 8000;
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 45],
      [1, 2, 3, 4, 44, 45],
      [1, 2, 3, 43, 44, 45],
      [1, 2, 42, 43, 44, 45],
      [1, 41, 42, 43, 44, 45],
      [40, 41, 42, 43, 44, 45]
    ];
    const expected = 25394437.5;

    mockRandoms(randoms);

    lottoGame.setPurchaseAmount(purchaseAmount);
    lottoGame.calculatePurchaseQuantity();
    lottoGame.generateTickets();
    lottoGame.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lottoGame.setBonusNumber(7);
    lottoGame.evaluateTickets();
    lottoGame.calculateTotalPrizeAmount();
    lottoGame.calculateEarningsRate();

    expect(lottoGame.getEarningsRate()).toBe(expected);
  });
});
