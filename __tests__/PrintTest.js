import { printLottoNumbers, printWinning } from "../src/print";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
/* eslint-disable no-undef */
describe("결과 출력 테스트", () => {
  test("당첨 결과 테스트", () => {
    const rank = { first: 0, second: 0, third: 0, fourth: 0, fifth: 1 };
    const results = [
      "6개 일치 (2,000,000,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "3개 일치 (5,000원) - 1개",
    ];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    printWinning(rank);

    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });

  test("로또 출력 테스트", () => {
    const lottoNumbers = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const results = ["[1, 2, 3, 4, 5, 6]", "[7, 8, 9, 10, 11, 12]"];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    printLottoNumbers(lottoNumbers);

    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
});
