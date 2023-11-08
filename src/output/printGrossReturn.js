import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

function printGrossReturn(grossReturn) {
  Console.print(message.PRINT_GROSS_RETURN_START + grossReturn + message.PRINT_GROSS_RETURN_END);
}

export default printGrossReturn;
