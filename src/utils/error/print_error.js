import { Console } from '@woowacourse/mission-utils';

function printError(error) {
  Console.print(String(error).slice(7));
}

export default printError;
