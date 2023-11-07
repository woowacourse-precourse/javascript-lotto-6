import Lotto from "../src/Lotto.js";
import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
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

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR]");
  });

  test("출력되는 로또 번호가 오름차순으로 정렬되어 있는지 테스트", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const lotto = new Lotto([5, 4, 3, 6, 2, 1]);
    lotto.printNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
  });
});
