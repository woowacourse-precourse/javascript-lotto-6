import ResultBoard from "../src/ResultBoard.js";
import { getLogSpy } from "./ApplicationTest.js";

describe("결과 보드 클래스 테스트", () => {
  test("수익률 검사 테스트", () => {
    const logSpy = getLogSpy();
    //given
    const resultBoard = new ResultBoard([[1, 2, 3, 4, 5, 6]]);
    resultBoard.resultFromLastPrize = [0, 1, 0, 0, 0];

    //when
    resultBoard.calculateEarning(5);

    //then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("총 수익률은 1000.0%입니다."),
    );
  });

  test("당첨 결과 합산 테스트", () => {
    const resultBoard = new ResultBoard([[1, 2, 3, 4, 5, 6]]);
    resultBoard.decideWinning("1,2,3,4,5,7", "6");
    expect(resultBoard.resultFromLastPrize).toEqual([0, 0, 0, 1, 0]);
  });
  test("결과 테이블 출력 테스트", () => {
    const logSpy = getLogSpy();

    const resultBoard = new ResultBoard([[1, 2, 3, 4, 5, 6]]);
    resultBoard.resultFromLastPrize = [0, 1, 0, 1, 1];
    resultBoard.printResultTable();

    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("계산 후 결과 테이블 출력 테스트", () => {
    const logSpy = getLogSpy();

    const resultBoard = new ResultBoard([[1, 2, 3, 4, 5, 7]]);
    resultBoard.decideWinning([1, 2, 3, 4, 5, 6], 7);
    resultBoard.printResultTable();

    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
