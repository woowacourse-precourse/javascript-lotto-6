import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

function printStatistics(statistics) {
  Console.print(message.PRINT_WIN_STATISTICS);
  Console.print(message.PRINT_DIVIDER);
  Console.print(message.PRINT_MATCH_3 + statistics.match3 + message.COUNT_UNIT);
  Console.print(message.PRINT_MATCH_4 + statistics.match4 + message.COUNT_UNIT);
  Console.print(message.PRINT_MATCH_5 + statistics.match5 + message.COUNT_UNIT);
  Console.print(message.PRINT_MATCH_5_PLUS_BONUS + statistics.match5PlusBonus + message.COUNT_UNIT);
  Console.print(message.PRINT_MATCH_6 + statistics.match6 + message.COUNT_UNIT);
}

export default printStatistics;
