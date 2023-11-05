import OutputView from "../src/views/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn()
  }
}));

describe("OutputView 테스트", () => {

  beforeEach(() => {
    Console.print.mockClear();
  });

  test("로또 개수가 올바르게 출력되는지 확인", () => {
    OutputView.printLottoCount(5);
    expect(Console.print).toHaveBeenCalledWith("5개를 구매했습니다.\n");
  });  

  test("로또 번호들이 올바르게 출력되는지 확인", () => {
    const mockLottos = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
      { getNumbers: () => [7, 8, 9, 10, 11, 12] }
    ];

    OutputView.printLottos(mockLottos);

    expect(Console.print).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    expect(Console.print).toHaveBeenCalledWith("[7, 8, 9, 10, 11, 12]");
  });
});