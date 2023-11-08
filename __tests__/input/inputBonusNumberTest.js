import { ERROR_MESSAGES as LOTTO_VALIDATION_ERROR_MESSAGES } from "../../src/LottoValidation";
import { InputError } from "../../src/errors";
import inputBonusNumber, {
  ERROR_MESSAGES,
} from "../../src/input/inputBonusNumber";
import { mockQuestions } from "../../test-utils";
describe("보너스 숫자 입력 예외 테스트", () => {
  test.each([[["46"]], [["a"]], [["-13"]]])(
    "%#. 보너스 숫자가 1~45 사이의 숫자가 아니면 예외가 발생한다.",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputBonusNumber()).rejects.toThrow(
        new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.NUMBER_NOT_IN_RANGE)
      );
    }
  );

  test("당첨 숫자와 중복되면 예외가 발생한다.", async () => {
    // given
    const winningNumbers = "1,2,3,4,5,6";
    const inputs = ["6"];

    mockQuestions(inputs);

    // when & then
    await expect(inputBonusNumber(winningNumbers)).rejects.toThrow(
      new InputError(ERROR_MESSAGES.INCLUDED_WINNING_NUMBERS)
    );
  });
});
