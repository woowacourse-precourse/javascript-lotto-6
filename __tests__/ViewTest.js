import View from "../src/View.js";
import { Console } from "@woowacourse/mission-utils";

describe("View 테스트", () => {
  test("로또 구입 금액 입력 테스트", async () => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockResolvedValue("3000");

    const view = new View();
    const amount = await view.getLottoPurchaseAmount();

    expect(amount).toEqual("3000");
  });

  test("당첨번호 정상 입력 테스트", async () => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");

    const view = new View();
    const winningNumbers = await view.getLottoWinningNumbers();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
