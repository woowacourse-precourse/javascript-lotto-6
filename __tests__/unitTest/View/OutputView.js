import OutputView from "../../../src/lib/View/OutputView";

describe("OutputView.lottoBundleMessage", () => {
  test("로또를 구매한 결과는 형식에 맞도록 가공되어야 한다.", () => {
    // given
    const purchaseHistory = [
      [1, 4, 23, 42, 43, 45],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [4, 34, 41, 42, 43, 44],
    ];

    // when
    const result = OutputView.lottoBundleMessage({ purchaseHistory });

    // then
    const expected = [
      "",
      "4개를 구매했습니다.",
      "[1, 4, 23, 42, 43, 45]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[4, 34, 41, 42, 43, 44]",
      "",
    ];
    expect(result).toEqual(expected);
  });
});

describe("OutputView.resultMessage", () => {
  test("당첨 통계는 주어진 형식에 맞도록 가공되어야 한다.", () => {
    // given
    const prizeMap = new Map([
      [6, 4],
      [5, 1],
    ]);
    const winRate = 100;

    // when
    const result = OutputView.resultMessage({ prizeMap, winRate });

    // then
    const expected = [
      "",
      "당첨 통계",
      "---",
      `3개 일치 (5,000원) - 1개`,
      `4개 일치 (50,000원) - 0개`,
      `5개 일치 (1,500,000원) - 0개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`,
      `6개 일치 (2,000,000,000원) - 0개`,
      `총 수익률은 100.0%입니다.`,
    ];
    expect(result).toEqual(expected);
  });
});
