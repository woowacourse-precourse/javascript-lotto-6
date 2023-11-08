import userLottoOutput from "../../src/view/output/userLottoOutput.js";
import { Console } from "@woowacourse/mission-utils";

describe("LottoGame userLottoOutput 테스트", () => {
  test("형식에 맞게 출력되어야 함", () => {
    Console.print = jest.fn();
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 11, 21, 31, 41, 45],
    ];

    userLottoOutput(lottoNumbers);

    lottoNumbers.forEach((numbers) => {
      expect(Console.print).toHaveBeenCalledWith(`[${numbers.join(", ")}]`);
    });
  });
});
