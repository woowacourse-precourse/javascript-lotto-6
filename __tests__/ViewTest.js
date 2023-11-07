import LottoView from "../src/View/LottoView.js";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe("LottoView 클래스 테스트", () => {
  test("createPurchaseData(): 정상적인 입력일 때 정확한 문자열을 반환한다.", () => {
    const view = new LottoView();
    const numberOfSets = 3;
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    const formattedString = view.createPurchaseData(numberOfSets, lottoNumbers);
    const expectedString =
      "3개를 구매했습니다. \n[1, 2, 3, 4, 5, 6]\n[7, 8, 9, 10, 11, 12]\n[13, 14, 15, 16, 17, 18]";
    expect(formattedString).toBe(expectedString);
  });

  test("createLottoResults(): 정상적인 입력일 때 정확한 문자열을 반환한다.", () => {
    const view = new LottoView();
    const statistics = {
      3: 0,
      4: 0,
      5: 0,
      "5+bonus": 0,
      6: 0,
      totalPrize: 0,
      profitRate: 0,
    };

    const formattedString = view.createLottoResult(statistics);
    const expectedString =
      "당첨 통계\n---\n3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n6개 일치 (2,000,000,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n총 수익률은 0%입니다.";
    expect(formattedString).toBe(expectedString);
  });

  test("displayResult(): Console.print가 올바른 인자로 호출되는지 확인한다.", () => {
    const view = new LottoView();
    const result = "테스트 결과입니다.";

    view.displayResult(result);
    expect(Console.print).toHaveBeenCalledWith(result);
  });
});
