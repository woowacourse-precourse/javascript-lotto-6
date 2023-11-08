import { Console } from "@woowacourse/mission-utils";
import { InputError } from "../errors/index.js";

export const INPUT_PROMPT = "구입금액을 입력해 주세요.\n";
export const ERROR_MESSAGES = Object.freeze({
  NOT_MULTIPLE_OF_THOUSAND: "입력값은 1,000 단위의 숫자여야 합니다.",
});

const inputPurchasePrice = async () => {
  const input = await Console.readLineAsync(INPUT_PROMPT);

  if (!isMultipleOfThousand(input)) {
    throw new InputError(ERROR_MESSAGES.NOT_MULTIPLE_OF_THOUSAND);
  }

  return input;
};

const isMultipleOfThousand = (str) => {
  return /^([1-9][0-9]*000)$/.test(str);
};

export default inputPurchasePrice;
