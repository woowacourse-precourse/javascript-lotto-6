import { MissionUtils } from '@woowacourse/mission-utils';

import { MESSAGE, RESULT } from '../../constants/constants.js';

class Output {
  static print(outputText) {
    MissionUtils.Console.print(outputText);
  }

  static printArray(numbers) {
    MissionUtils.Console.print(`[${numbers.join(', ')}]`);
  }

  static printWinningResult(lottoResults, earnedPriceRate) {
    MissionUtils.Console.print(MESSAGE.TITLE);
    MissionUtils.Console.print(MESSAGE.DIVIDER);
    MissionUtils.Console.print(`${MESSAGE.FIFTH_RESULT}${lottoResults[RESULT.FIFTH]}${MESSAGE.UNIT}`);
    MissionUtils.Console.print(`${MESSAGE.FOURTH_RESULT}${lottoResults[RESULT.FOURTH]}${MESSAGE.UNIT}`);
    MissionUtils.Console.print(`${MESSAGE.THIRD_RESULT}${lottoResults[RESULT.THIRD]}${MESSAGE.UNIT}`);
    MissionUtils.Console.print(`${MESSAGE.SECOND_RESULT}${lottoResults[RESULT.SECOND]}${MESSAGE.UNIT}`);
    MissionUtils.Console.print(`${MESSAGE.FIRST_RESULT}${lottoResults[RESULT.FIRST]}${MESSAGE.UNIT}`);
    MissionUtils.Console.print(`${MESSAGE.PRICE_RATE_PRE}${earnedPriceRate}${MESSAGE.PRICE_RATE_POST}`);
  }
}

export default Output;
