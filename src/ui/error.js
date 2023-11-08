import { Console } from '@woowacourse/mission-utils';

const printError = (error) => {
  Console.print(`[ERROR] ${error.message}`);
};

export default printError;
