import { lottoNumbersGenerator, calculator, printResult } from "../src/Game.js";
import Lotto from "../src/Lotto.js";

describe("게임 기능 테스트", () => {
  test("올바른 결과 계산을 수행한다.", () => {
    const buyingNumbers = [
      [1, 2, 3, 4, 5, 7],
      [4, 5, 6, 7, 8, 9],
    ];
    const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    const result = calculator(buyingNumbers, winningNumbers, bonusNumber);

    expect(result).toEqual({ 1: 0, 2: 1, 3: 0, 4: 0, 5: 1 });
  });

  test("올바른 결과를 출력한다.", () => {
    const result = { 1: 0, 2: 1, 3: 0, 4: 0, 5: 1 };
    const consoleSpy = jest.spyOn(console, "log");

    printResult(result);

    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "3개 일치 (5,000원) - 1개");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "4개 일치 (50,000원) - 0개");
    expect(consoleSpy).toHaveBeenNthCalledWith(
      3,
      "5개 일치 (1,500,000원) - 0개"
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      4,
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      5,
      "6개 일치 (2,000,000,000원) - 0개"
    );
  });
});
