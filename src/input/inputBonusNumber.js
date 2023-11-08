import { Console } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER_RANGE } from "../Lotto.js";
import LottoValidation, {
  ERROR_MESSAGES as LOTTO_VALIDATION_ERROR_MESSAGES,
} from "../LottoValidation.js";
import { InputError } from "../errors/index.js";

const SEPERATOR = ",";
export const INPUT_PROMPT = "보너스 번호를 입력해 주세요.\n";
export const ERROR_MESSAGES = Object.freeze({
  INCLUDED_WINNING_NUMBERS: "당첨 번호와 중복될 수 없습니다.",
});

const inputBonusNumber = async (winningNumbers) => {
  const input = await Console.readLineAsync(INPUT_PROMPT);

  if (
    !LottoValidation.isNumbersInRange(
      [Number(input)],
      LOTTO_NUMBER_RANGE.MIN,
      LOTTO_NUMBER_RANGE.MAX
    )
  ) {
    throw new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.NUMBER_NOT_IN_RANGE);
  }

  if (winningNumbers.split(SEPERATOR).includes(input)) {
    throw new InputError(ERROR_MESSAGES.INCLUDED_WINNING_NUMBERS);
  }

  return input;
};

export default inputBonusNumber;
