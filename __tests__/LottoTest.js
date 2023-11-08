import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/class/Lotto";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  // 예외 처리 테스트
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

  test("로또 번호에 범위(1~45) 밖의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 450]);
    }).toThrow("[ERROR]");
  });

  // 기능 테스트
  test("로또 번호를 형식(, 로 구분)에 맞게 출력한다.", () => {
    const logSpy = getLogSpy();

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = "[1, 2, 3, 4, 5, 6]";

    lotto.print();

    expect(logSpy).toHaveBeenCalledWith(result);
  });

  test("로또 번호와 당첨 번호가 몇 개 일치하는지 검사한다.", () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto([2, 3, 4, 5, 6, 7]);

    const result = lotto.draw(winningNumber);

    expect(result).toEqual(5);
  });

  test("로또 번호와 보너스 번호가 일치하는지 여부를 검사한다.", () => {
    const bonusNumber = 13;
    const lotto = new Lotto([2, 3, 4, 5, 6, 7]);

    const result = lotto.bonusDraw(bonusNumber);

    expect(result).toEqual(false);
  });
});
