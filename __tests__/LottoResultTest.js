import LottoResult from "../src/LottoResult.js";
import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

describe("LottoResult 클래스 테스트", () => {
  test("로또 당첨 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(
        new Array(6 + 1).fill(0).map((value, index) => index + 1),
        6 + 2
      );
    }).toThrow("[ERROR]");
  });

  test("로또 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(new Array(6).fill(1), 2);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호중에 있다면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(
        new Array(6).fill(0).map((value, index) => index + 1),
        6
      );
    }).toThrow("[ERROR]");
  });

  test("추첨 결과 통계", () => {
    const numbers = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [2, 3, 4, 5, 6, 8],
      [1, 3, 5, 6, 8, 9],
      [2, 3, 4, 5, 6, 8],
      [8, 10, 11, 12, 13, 14],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonus = 8;
    const result = [1, 1, 2, 1, 1, 0];
    const LottoResult = new LottoResult();

    LottoResult.setLottoes(numbers.map((number) => new Lotto(number)));
    LottoResult.setWinningNumber(winningNumber, bonus);
    expect(LottoResult.getResult()).toEqual(result);
  });

  test("추첨 후 수익률 계산", () => {
    const numbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const lottoResult = new LottoResult();
    lottoResult.setLottoes(numbers.map((number) => new Lotto(number)));
    lottoResult.setWinningNumber(winningNumber, bonus);

    expect(lottoResult.getProfitWithResult(lottoResult.getResult())).toEqual({
      prize: 5000,
      profit: 62.5,
    });
  });
});
