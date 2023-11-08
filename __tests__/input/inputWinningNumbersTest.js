import { ERROR_MESSAGES as LOTTO_VALIDATION_ERROR_MESSAGES } from "../../src/LottoValidation";
import { InputError } from "../../src/errors";
import inputWinningNumbers, {
  ERROR_MESSAGES,
} from "../../src/input/inputWinningNumbers";
import { mockQuestions } from "../../test-utils";

describe("당첨 숫자 입력 예외 테스트", () => {
  test("빈 값이면 예외가 발생한다.", async () => {
    // given
    const inputs = [""];

    mockQuestions(inputs);

    // when & then
    await expect(inputWinningNumbers()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.EMPTY_INPUT)
    );
  });

  test.each([[[" "]], [["lucas, pobi"]], [["lucas "]]])(
    "%#. 공백을 포함하면 예외가 발생한다.",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputWinningNumbers()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.CONTAINS_WHITE_SPACE)
      );
    }
  );

  test("연속한 쉼표(,)를 포함하면 예외가 발생한다.", async () => {
    // given
    const inputs = ["lucas,,pobi"];

    mockQuestions(inputs);

    // when & then
    await expect(inputWinningNumbers()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.CONSECUTIVE_COMMAS)
    );
  });

  test.each([[[","]], [[",lucas,pobi"]], [["lucas,pobi,"]]])(
    "%#. 시작 혹은 끝에 쉼표(,)를 포함하면 예외가 발생한다.",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputWinningNumbers()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.COMMA_AT_START_OR_END)
      );
    }
  );

  test.each([[["46,1,2,3,4,5"]], [["a,1,2,3,4,5"]], [["-13,1,2,3,4,5"]]])(
    "%#. 당첨 숫자가 1~45 사이의 숫자가 아니면 예외가 발생한다.",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputWinningNumbers()).rejects.toThrow(
        new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.NUMBER_NOT_IN_RANGE)
      );
    }
  );

  test("당첨 숫자의 갯수가 6개가 아니면 예외가 발생한다.", async () => {
    // given
    const inputs = ["1,2,3,4,5,6,7"];

    mockQuestions(inputs);

    // when & then
    await expect(inputWinningNumbers()).rejects.toThrow(
      new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.LENGTH_NOT_MATCHED)
    );
  });

  test("당첨 숫자에 중복된 숫자가 있으면 예외가 발생한다.", async () => {
    // given
    const inputs = ["1,2,3,4,5,5"];

    mockQuestions(inputs);

    // when & then
    await expect(inputWinningNumbers()).rejects.toThrow(
      new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.DUPLICATED_NUMBERS)
    );
  });
});
