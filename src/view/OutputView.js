import { MissionUtils } from '@woowacourse/mission-utils';
import { INFO_MESSAGES } from '../constant.js';

export default class OutputView {
  printMessage(message) {
    MissionUtils.Console.print(`${message}`);
  }

  printPurchased(quantity) {
    MissionUtils.Console.print(`${quantity}${INFO_MESSAGES.PURCHASED}`);
  }
}
