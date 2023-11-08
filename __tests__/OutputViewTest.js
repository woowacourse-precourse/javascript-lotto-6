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

  test("당첨 통계와 ROI가 올바르게 출력되는지 확인", () => {
    const mockRoi = 150;
    const mockResult = {
      5: 3,
      4: 2,
      3: 1,
      2: 0,
      1: 1
    };
  
    OutputView.printResult(mockRoi, mockResult);
  
    expect(Console.print).toHaveBeenCalledWith("당첨 통계");
    expect(Console.print).toHaveBeenCalledWith("---");
    expect(Console.print).toHaveBeenCalledWith("3개 일치 (5,000원) - 3개");
    expect(Console.print).toHaveBeenCalledWith("4개 일치 (50,000원) - 2개");
    expect(Console.print).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("5개 일치, 보너스 볼 일치 (30,000,000원) - 0개");
    expect(Console.print).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("총 수익률은 150.0%입니다.");
  });  
});