import { Console } from '@woowacourse/mission-utils';
import { INFO_RESULT, RESULT_COUNT, WINNING_PRICE } from '../constants.js';

function printResult(result, returnRate) {
  Console.print(INFO_RESULT);
  for (let i = 0; i < result.length; i += 1) {
    Console.print(`${RESULT_COUNT[i]} (${WINNING_PRICE[i].toLocaleString('ko-KR')}원) - ${result[i]}개`);
  }
  Console.print(`총 수익률은 ${returnRate}%입니다.`);
}

export default printResult;
