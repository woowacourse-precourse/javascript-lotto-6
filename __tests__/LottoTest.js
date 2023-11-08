import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45가 넘는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 47, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "lotto"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("일치하는 번호 개수에 따른 랭킹 출력", () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const testCaseList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 8, 9, 10, 11],
      [1, 8, 9, 10, 11, 12],
      [8, 9, 10, 11, 12, 13],
    ];
    const rank = [
      "firstRank",
      "secondRank",
      "thirdRank",
      "fourthRank",
      "fifthRank",
      "nothing",
      "nothing",
      "nothing",
    ];

    testCaseList.forEach((testCase, index) => {
      expect(new Lotto(testCase).raffleNumber(lottoNumber, bonusNumber)).toBe(
        rank[index]
      );
    });
  });
});
