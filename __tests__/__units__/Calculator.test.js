import { LOTTO_RULE, MESSAGES } from "../../src/constants";
import { getLogSpy, mockQuestions } from "../../src/utils";
import { Calculator } from "../../src/domain";
import { CustomError } from "../../src/exception";

const { LENGTH, RANGE } = LOTTO_RULE;
const { MIN, MAX } = RANGE;

describe("Calculator 유닛 테스트", () => {
  test("로또 인스턴스 생성", () => {
    const calculator = new Calculator();
    expect(calculator).toBeInstanceOf(Calculator);
  });

  describe("당첨 번호 입력 유효성 테스트", () => {
    const { NOT_UNIQUE, NOT_NUMBER, NOT_INTEGER, NOT_LENGTH, NOT_ON_RANGE } =
      MESSAGES.ERROR.LOTTO;

    const validWinningNumbers = [[["1,2,3,4,5,6"]]];
    const inValidWinningNumebrsAndMessages = [
      [["1,1,1,1,1,1"], NOT_UNIQUE],
      [["안,녕,하,세,요,!"], NOT_NUMBER],
      [["1,2,3,4,5"], NOT_LENGTH(LENGTH)],
      [["1.5,2.3,3.5,4.1,5.7,4.4"], NOT_INTEGER],
      [["-1,46,435,34314,1344,49404"], NOT_ON_RANGE(RANGE.MIN, RANGE.MAX)],
    ];

    test.each(validWinningNumbers)(
      "올바른 케이스",
      async (validWinningNumber) => {
        // given
        const logSpy = getLogSpy();
        const calculator = new Calculator();
        mockQuestions(validWinningNumber);

        // then
        await expect(calculator.promptWinningNumber()).resolves.not.toThrow();
      }
    );

    test.each(inValidWinningNumebrsAndMessages)(
      "틀린 케이스",
      async (inValidWinningNumber, errorMessage) => {
        // given
        const calculator = new Calculator();
        mockQuestions(inValidWinningNumber);
        // then
        await expect(calculator.promptWinningNumber()).rejects.toThrow(
          new CustomError(errorMessage)
        );
      }
    );
  });

  describe("보너스 번호 입력 유효성 테스트", () => {
    const { NOT_NUMBER, NOT_INTEGER, NOT_ON_RANGE } = MESSAGES.ERROR.LOTTO;

    const validBonusNumbers = [[["7"]]];
    const inValidBonusNumbersAndErrorMessages = [
      [["힣"], NOT_NUMBER],
      [["4.7"], NOT_INTEGER],
      [["48"], NOT_ON_RANGE(MIN, MAX)],
      [["-1"], NOT_ON_RANGE(MIN, MAX)],
    ];

    test.each(validBonusNumbers)("올바른 케이스", async (validBonusNumber) => {
      // given
      const calculator = new Calculator();
      mockQuestions(validBonusNumber);

      // then
      await expect(
        calculator.promptBonusNumber(MESSAGES.BONUS_NUMBER.PLACE_HOLDER)
      ).resolves.not.toThrow();
    });

    test.each(inValidBonusNumbersAndErrorMessages)(
      "틀린 케이스",
      async (inValidBonusNumber, errorMessage) => {
        // given
        const calculator = new Calculator();
        mockQuestions(inValidBonusNumber);
        // then
        await expect(calculator.promptBonusNumber()).rejects.toThrow(
          new CustomError(errorMessage)
        );
      }
    );
  });

  test("당첨 통계 반환 테스트", async () => {
    // given
    const lottos = [
      [11, 23, 31, 14, 35, 46],
      [14, 25, 34, 43, 18, 49],
      [1, 2, 3, 8, 9, 10],
    ];
    const winningNumber = "1,2,3,4,5,6";
    const bonusNumber = "7";
    const expectedResult = {
      lottoWinningsResult: [1, 0, 0, 0, 0],
      totalReturn: "166.7",
    };
    const calculator = new Calculator();
    mockQuestions([winningNumber, bonusNumber]);

    // when
    await calculator.promptWinningNumber(MESSAGES.WINNING_NUMBER.PLACE_HOLDER);
    await calculator.promptBonusNumber(MESSAGES.BONUS_NUMBER.PLACE_HOLDER);
    const result = calculator.getWinningsResult(lottos);

    // then
    expect(result).toEqual(expectedResult);
  });
});
