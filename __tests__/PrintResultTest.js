import { printResult } from '../src/PrintResult';
import { Console } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('로또 결과를 제대로 출력하는지 테스트', () => {
  beforeEach(() => {
    Console.print.mockClear();
  });

  it('로또 결과와 수익률을 제대로 출력하는지 테스트', () => {
    const resultList = [1, 1, 1, 1, 1];
    const budget = 5000;

    printResult(resultList, budget);

    expect(Console.print).toHaveBeenCalledWith("당첨 통계");
    expect(Console.print).toHaveBeenCalledWith("---");
    expect(Console.print).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("4개 일치 (50,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("5개 일치, 보너스 볼 일치 (30,000,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 1개");
    expect(Console.print).toHaveBeenCalledWith("총 수익률은 40631100%입니다.");
  });
});