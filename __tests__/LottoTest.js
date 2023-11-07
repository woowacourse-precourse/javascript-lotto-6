import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호 출력 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const logSpy = getLogSpy();
    lotto.printLotto();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[1, 2, 3, 4, 5, 6]")
    );
  });

  test.each([
    [[[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, 1]],
    [[[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7, 2]],
  ])("두 번호를 비교하여 등수를 출력합니다.", (inputs) => {
    const lotto = new Lotto(inputs[0]);
    const choice = new Lotto(inputs[1]);
    const bonus = inputs[2];
    expect(lotto.compare(choice.numbers, bonus)).toEqual(inputs[3]);
  });
});
