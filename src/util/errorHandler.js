import { Console } from '@woowacourse/mission-utils';

const errorHandler = async (input, validation) => {
  try {
    validation(input);
    return true;
  } catch (error) {
    Console.print(`[ERROR] ${error}`);
    return false;
  }
};

export default errorHandler;
