import { Random } from "@woowacourse/mission-utils";
import OutputView from "../../src/view/OutputView.js";

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const mockLottoGameResult = {
  money: 8000,
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
};

describe("로또 구매 내역 출력 테스트", () => {
  test("발행한 로또 수량 출력", () => {
    const expected = `${mockLottoGameResult.amount}개를 구매했습니다.`;
    const result = OutputView.printAmount(mockLottoGameResult.money);

    expect(result).toHaveBeenCalledWith(expected);
  });

  test("수량에 따른 발행한 여러 로또 출력", () => {
    mockRandoms(mockLottoGameResult.lottos);

    const expected =
      "[8, 21, 23, 41, 42, 43]\n[3, 5, 11, 16, 32, 38]\n[7, 11, 16, 35, 36, 44]\n[1, 8, 11, 31, 41, 42]\n[13, 14, 16, 38, 42, 45]\n[7, 11, 30, 40, 42, 43]\n[2, 13, 22, 32, 38, 45]\n[1, 3, 5, 14, 22, 45]";
    const result = OutputView.printLottos(mockLottoGameResult.lottos);

    expect(result).toHaveBeenCalledWith(expected);
  });
});
