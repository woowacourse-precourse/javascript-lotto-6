import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  describe("Test 1. 로또 번호 테스트", () => {
    test("Test 1-1. 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });
  
    test("Test 1-2. 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });
  
    // 아래에 추가 테스트 작성 가능
    test("Test 1-3. 로또 번호에 1 ~ 45 사이의 숫자가 아닌 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46]);
      }).toThrow("[ERROR]");
    });
  });

  describe("Test 2. 로또 메소드 테스트", () => {
    test("Test 2-1. 로또가 자기 자신의 번호를 출력한다.", () => {
      const logSpy = getLogSpy();
      const numbers = [1, 2, 3, 4, 5, 6];
      const output = `[${numbers.join(", ")}]`;

      new Lotto(numbers);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
