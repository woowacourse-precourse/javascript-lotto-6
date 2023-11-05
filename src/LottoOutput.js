
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from './Messages.js';

export function printLottoAmount(amount) {
  MissionUtils.Console.print(`\n${amount}${MESSAGES.LOTTO_BUY_AMOUNT_OUTPUT}`);
}

export function printLottoNumbers(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    MissionUtils.Console.print(numbers[index]);
  }
}