import Lottos from "../src/Lottos.js";
import { mockRandoms } from "./ApplicationTest.js";

describe("Lottos 클래스 테스트", () => {
  test("calculateResults 메서드가 로또 당첨 결과를 정확하게 계산한다.", () => {
    const winningNumbers = [3, 5, 12, 21, 28, 39];
    const bonusNumber = 7;
    const ticketCount = 3;
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [3, 5, 12, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];

    mockRandoms(lottoNumbers);

    const lottos = new Lottos(ticketCount);
    const result = lottos.calculateResults(winningNumbers, bonusNumber);

    expect(result).toEqual([
      { matchingNumbers: 2, bonusMatch: false },
      { matchingNumbers: 3, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: true },
    ]);
  });
});
