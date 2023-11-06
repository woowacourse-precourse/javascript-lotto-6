import { ERROR_MESSAGE as EM } from "../../../src/lib/Constants";
import OutputView from "../../../src/lib/View/OutputView";
import { getLogSpy } from "../../ApplicationTest";

describe("OutputView.tickets", () => {
  test("티켓을 구매한 결과는 형식에 따라 출력되어야 한다.", () => {
    // given
    const logSpy = getLogSpy();
    const ticketItems = [
      [1, 4, 23, 42, 43, 45],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [4, 34, 41, 42, 43, 44],
    ];

    // when
    OutputView.tickets({ ticketItems });

    // then
    const expected = [
      "",
      "4개를 구매했습니다.",
      "[1, 4, 23, 42, 43, 45]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[4, 34, 41, 42, 43, 44]",
      "",
    ].join("\n");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});

describe("OutputView.result", () => {
  test("당첨 통계는 주어진 형식에 따라 출력되어야 한다.", () => {
    // given
    const prizeMap = new Map([
      [6, 4],
      [5, 1],
    ]);
    const winRate = 100;
    const logSpy = getLogSpy();

    // when
    OutputView.result({ prizeMap, winRate });

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
    ].join("\n");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});

describe("OutputView.err", () => {
  test.each([
    [EM.INVALID_TICKET_MOD, EM.INVALID_TICKET_MOD],
    [EM.INVALID_WIN_NUMBER_RANGE, EM.INVALID_WIN_NUMBER_RANGE],
    ["Unexpected reserved word", EM.UNKNOWN_ERROR],
  ])("에러 메세지는 형식에 따라 출력되어야 한다.", (message, expected) => {
    // given
    const logSpy = getLogSpy();
    // when
    OutputView.err({ message });
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});
