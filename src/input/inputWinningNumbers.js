import { Console } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER_COUNT, LOTTO_NUMBER_RANGE } from "../Lotto.js";
import LottoValidation, {
  ERROR_MESSAGES as LOTTO_VALIDATION_ERROR_MESSAGES,
} from "../LottoValidation.js";
import { InputError } from "../errors/index.js";

const NUMBER_SEPERATOR = ",";
export const INPUT_PROMPT = "당첨 번호를 입력해 주세요.\n";
export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: "입력값이 없습니다.",
  CONTAINS_WHITE_SPACE: "공백이 포함될 수 없습니다.",
  CONSECUTIVE_COMMAS: "쉼표(,)가 연속할 수 없습니다.",
  COMMA_AT_START_OR_END: "쉼표(,)가 시작이나 끝에 올 수 없습니다.",
});

const inputWinningNumbers = async () => {
  const input = await Console.readLineAsync(INPUT_PROMPT);

  if (isEmptyString(input)) {
    throw new InputError(ERROR_MESSAGES.EMPTY_INPUT);
  }

  if (containsWhiteSpace(input)) {
    throw new InputError(ERROR_MESSAGES.CONTAINS_WHITE_SPACE);
  }

  if (containsConsecutiveCommas(input)) {
    throw new InputError(ERROR_MESSAGES.CONSECUTIVE_COMMAS);
  }

  if (containsCommaAtStartOrEnd(input)) {
    throw new InputError(ERROR_MESSAGES.COMMA_AT_START_OR_END);
  }

  const winningNumbers = input
    .split(NUMBER_SEPERATOR)
    .map((str) => Number(str));

  if (
    !LottoValidation.isNumbersInRange(
      winningNumbers,
      LOTTO_NUMBER_RANGE.MIN,
      LOTTO_NUMBER_RANGE.MAX
    )
  ) {
    throw new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.NUMBER_NOT_IN_RANGE);
  }

  if (!LottoValidation.isLengthMatch(winningNumbers, LOTTO_NUMBER_COUNT)) {
    throw new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.LENGTH_NOT_MATCHED);
  }

  if (!LottoValidation.hasUniqueElements(winningNumbers)) {
    throw new InputError(LOTTO_VALIDATION_ERROR_MESSAGES.DUPLICATED_NUMBERS);
  }
};

const isEmptyString = (str) => {
  return str.length === 0;
};

const containsWhiteSpace = (str) => {
  return /\s/.test(str);
};

const containsConsecutiveCommas = (str) => {
  return /[,]{2}/.test(str);
};

const containsCommaAtStartOrEnd = (str) => {
  return /^,|,$/.test(str);
};

export default inputWinningNumbers;
