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
    const purchaseResultMessage = `
    [8, 21, 23, 41, 42, 43]
    [3, 5, 11, 16, 32, 38]
    `;
    OutputView.printPurchaseResult(purchaseResult);
    expect(Console.print).toBeCalledWith(purchaseResultMessage);
  });
});
