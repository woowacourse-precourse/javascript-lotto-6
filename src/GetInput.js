import { Console } from "@woowacourse/mission-utils";

export const getInput = async (validateFunction) => {
  const INPUT = await Console.readLineAsync("");
  const IS_VALID = validateFunction(INPUT);
  if (IS_VALID) {
    return INPUT;
  }
};
