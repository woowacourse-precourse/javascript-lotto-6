import { getLogSpy } from "../../src/utils";
import { Lotto } from "../../src/domain";
import { LOTTO_RULE, MESSAGES } from "../../src/constants";
import { CustomError } from "../../src/exception";

describe("Lotto 유닛 테스트", () => {
  const generatedNumber = [1, 2, 3, 4, 5, 6];

  test("로또 인스턴스 생성", () => {
    const lotto = new Lotto(generatedNumber);
    expect(lotto).toBeInstanceOf(Lotto);
  });

  describe("로또 번호 유효성 검증", () => {
    const { LENGTH, RANGE } = LOTTO_RULE;
    const { NOT_UNIQUE, NOT_NUMBER, NOT_INTEGER, NOT_LENGTH, NOT_ON_RANGE } =
      MESSAGES.ERROR.LOTTO;

    const invalidInputsAndErrorMessages = [
      [[1, 1, 1, 1, 1, 1], NOT_UNIQUE],
      [["안", "녕", "하", "세", "요", "!"], NOT_NUMBER],
      [[1, 2, 3, 4, 5], NOT_LENGTH(LENGTH)],
      [[1.5, 2.3, 3.5, 4.1, 5.7, 4.4], NOT_INTEGER],
      [[-1, 46, 435, 34314, 1344, 49404], NOT_ON_RANGE(RANGE.MIN, RANGE.MAX)],
    ];

    test("올바른 케이스", () => {
      expect(() => new Lotto(generatedNumber)).not.toThrow();
    });

    test.each(invalidInputsAndErrorMessages)(
      "틀린 케이스",
      (generatedNumber, expectedErrorMessage) => {
        expect(() => new Lotto(generatedNumber)).toThrow(
          new CustomError(expectedErrorMessage)
        );
      }
    );
  });

  test("로또 번호 반환", () => {
    // given
    const lotto = new Lotto(generatedNumber);

    const result = lotto.getNumbers();
    const expectedResult = generatedNumber;

    // then
    expect(result).toEqual(expectedResult);
  });

  test("로또 번호 출력", () => {
    // given
    const logSpy = getLogSpy();
    const lotto = new Lotto(generatedNumber);

    // when
    lotto.printNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`[${generatedNumber.join(", ")}]`)
    );
  });
});
