import { Console } from "@woowacourse/mission-utils";
import OutputView from "../../src/View/OutputView";

Console.print = jest.fn();

describe("OutputView 객체 테스트", () => {
  test("printPurchaseResult 메서드가 존재해야 한다.", () => {
    expect(typeof OutputView.printPurchaseResult).toBe("function");
  });

  test("printPurchaseResult 메서드를 호출하면 Console.print가 구매 결과와 함께 호출되야 한다.", () => {
    // given
    const purchaseResult = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];
    const purchaseResultMessage = "\n2개를 구매했습니다.\n[8, 21, 23, 41, 42, 43]\n[3, 5, 11, 16, 32, 38]";
    OutputView.printPurchaseResult(purchaseResult);
    expect(Console.print).toBeCalledWith(purchaseResultMessage);
  });

  test("printMatchResult 메서드가 존재해야 한다.", () => {
    expect(typeof OutputView.printMatchResult).toBe("function");
  });

  test("printMatchResult 메서드를 호출하면 Console.print가 당첨 결과와 함께 호출되야 한다.", () => {
    const matchResult = {
      firstPlace: 1,
      secondPlace: 1,
      thirdPlace: 0,
      fourthPlace: 1,
      fifthPlace: 0,
      returnRate: 50751250,
    };
    const matchResultMessage = `
    당첨 통계
    ---
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    총 수익률은 62.5%입니다.
    `;
    OutputView.printMatchResult(matchResult);
    expect(Console.print).toBeCalledWith(matchResultMessage);
  });
});
