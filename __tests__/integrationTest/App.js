import App from "../../src/App";
import { getLogSpy, mockQuestions, mockRandoms } from "../ApplicationTest";

describe("App.play - 기능", () => {
  test("정해진 규칙에 따라 실행 후 내용을 출력하여야 한다.", async () => {
    // given
    const questions = [
      ["1230", "foo", "bar", "0", "-1000", "12000"],
      [
        "1,2,3,4",
        "1,2,3,4,5,zzw",
        "1,2,3,4,5,46",
        "1,2,3,4,5,5",
        "17,2,43,4,32,23",
      ],
      ["17", "baz", "46", "-1", "34.3", "8"],
    ].reduce((acc, e) => acc.concat(e));
    const randoms = [
      [8, 18, 5, 23, 42, 32],
      [5, 2, 7, 17, 6, 23],
      [4, 42, 44, 37, 12, 36],
      [11, 13, 12, 21, 41, 30],
      [6, 5, 19, 21, 42, 16],
      [3, 37, 20, 39, 41, 44],
      [3, 11, 12, 16, 31, 45],
      [1, 5, 8, 16, 19, 36],
      [8, 9, 15, 31, 33, 36],
      [1, 4, 30, 33, 37, 44],
      [2, 4, 32, 38, 43, 45],
      [1, 3, 13, 27, 34, 36],
      [8, 17, 4, 23, 43, 32],
    ];
    const expectedLog = [
      ...Array.from({ length: 14 }, () => "[ERROR]"),
      "",
      "12개를 구매했습니다.",
      "[5, 8, 18, 23, 32, 42]",
      "[2, 5, 6, 7, 17, 23]",
      "[4, 12, 36, 37, 42, 44]",
      "[11, 12, 13, 21, 30, 41]",
      "[5, 6, 16, 19, 21, 42]",
      "[3, 20, 37, 39, 41, 44]",
      "[3, 11, 12, 16, 31, 45]",
      "[1, 5, 8, 16, 19, 36]",
      "[8, 9, 15, 31, 33, 36]",
      "[1, 4, 30, 33, 37, 44]",
      "[2, 4, 32, 38, 43, 45]",
      "[1, 3, 13, 27, 34, 36]",
      "",
      "",
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 458.3%입니다.",
    ];
    mockQuestions(questions);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expectedLog.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("App.play - 예외", () => {
  test("입력이 주어지지 않으면 루프에 빠지는 대신 정상적으로 프로그램이 종료되어야 한다.", async () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

describe("App.printTickets - 예외", () => {
  test("app의 인스턴스의 최초 실행 이전에 출력을 시도하면 에러 문구를 출력해야 한다.", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printTickets();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});

describe("App.printResult - 예외", () => {
  test("app의 인스턴스의 최초 실행 이전에 출력을 시도하면 에러 문구를 출력해야 한다.", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printResult();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
