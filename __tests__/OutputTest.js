import { Console } from "@woowacourse/mission-utils";
import { Output } from "../src/Output";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력 테스트", () => {
  test("몇개의 로또를 구매했는가", () => {
    const logSpy = getLogSpy();
    const inputs = [2000, 3000, 4000];
    const outputs = [
      "2개를 구매했습니다.",
      "3개를 구매했습니다.",
      "4개를 구매했습니다.",
    ];

    const printing = new Output();

    outputs.forEach((output) => {
      const input = inputs.shift();

      printing.printHowManyLotto(input);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("구매한 로또", () => {
    const logSpy = getLogSpy();
    const input = [
      [1, 2, 3, 4, 5, 6],
      [10, 20, 30, 35, 40, 42],
    ];
    const output = `[1, 2, 3, 4, 5, 6]${"\n"}[10, 20, 30, 35, 40, 42]`;
    const printing = new Output();

    printing.printMyLotto(input);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
