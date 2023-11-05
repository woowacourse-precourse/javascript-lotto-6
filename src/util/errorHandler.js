import { Console } from '@woowacourse/mission-utils';

const errorHandler = async (callback, validator, arg) => {
  while (true) {
    const input = await callback();
    let isValid = null;

    if (arg) isValid = await checkValidate({ bonusNumber: input, winningNumbers: arg }, validator);
    if (!arg) isValid = await checkValidate(input, validator);
    if (!isValid) continue;

    return input;
  }
};

const checkValidate = async (input, validation) => {
  try {
    validation(input);
    return true;
  } catch (error) {
    Console.print(`[ERROR] ${error}`);
    return false;
  }
};

export default errorHandler;
