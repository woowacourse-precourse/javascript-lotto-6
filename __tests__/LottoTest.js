import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

  test("로또 번호는 오름차순으로 정렬되어 출력해야 한다.", () => {
    const logSpy = getLogSpy();

    new Lotto([5, 3, 1, 4, 2, 6]);

    const log = "[1, 2, 3, 4, 5, 6]";

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
