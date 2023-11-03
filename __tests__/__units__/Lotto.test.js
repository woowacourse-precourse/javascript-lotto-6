import { getLogSpy } from "../../src/utils";
import Lotto from "../../src/domain/Lotto";

describe("Lotto 유닛 테스트", () => {
  const generatedNumber = [1, 2, 3, 4, 5, 6];

  test("로또 인스턴스 생성", () => {
    const lotto = new Lotto(generatedNumber);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  describe("로또 번호 유효성 검증", () => {
    test("올바른 케이스", () => {
      expect(() => new Lotto(generatedNumber)).not.toThrow();
    });

    test.each([
      [["안", "녕", "하", "세", "요", "!"]],
      [[1, 2, 3, 4, 5]],
      [[1.5, 2.3, 3.5, 4.1, 5.7, 4.4]],
      [[-1, 46, 435, 34314, 13434, 4943404]],
    ])("틀린 케이스", (generatedNumber) => {
      expect(() => new Lotto(generatedNumber)).toThrow("[ERROR]");
    });
  });

  test("로또 번호 반환", () => {
    // given
    const logSpy = getLogSpy();
    const lotto = new Lotto(generatedNumber);

    // when
    lotto.printNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(generatedNumber.join(", "))
    );
  });
});
