import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 값이 있습니다.");
  });

  test("당첨번호 확인 테스트", () => {
    const lotto = new Lotto([1,2,3,4,5,6]);
    const winNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6
    const expected = Object.freeze({
      main: 5,
      bonus: true,
    })
    const result = lotto.checkWin(winNumbers, bonusNumber);
    expect(result).toEqual(expected);
  })

  test("로또 객체가 오름차순으로 생성되는지 테스트", () => {
    const getLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, "print");
      logSpy.mockClear();
      return logSpy;
    };
    const logSpy = getLogSpy();
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    lotto.printConsole();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[1, 2, 3, 4, 5, 6]"));
  })
});
