import { Console } from '@woowacourse/mission-utils';

const errorHandler = async (callback, validator, winningNumbers) => {
  while (true) {
    const input = await callback();
    let isValid = null;

    if (winningNumbers) {
      isValid = await checkValidate({ bonusNumber: input, winningNumbers }, validator);
    }
    if (!winningNumbers) isValid = await checkValidate(input, validator);
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
