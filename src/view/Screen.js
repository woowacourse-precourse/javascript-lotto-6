import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, STRINGS, ERROR_PREFIX } from '../Constants';
import Validator from '../Validator';

class Screen {
  static async inputPurchaseMoney() {
    Console.print(MESSAGES.purchaseMoneyInputMessage);
    const money = Number(await Console.readLineAsync());

    Validator.validatePurchaseMoney(money);

    return money;
  }

  static printErrorMessage(message) {
    Console.print(`${ERROR_PREFIX} ${message}`);
  }

  static printLottoNumbers(lottos) {
    Console.print(`${lottos.length}${MESSAGES.purchaseLottoCountsMessage}`);

    lottos.forEach((lotto) => {
      Console.print(lotto.getString());
    });
  }

  static async inputWinningLotto() {
    Console.print(MESSAGES.winningLottoInputMessage);
    const numbers = await Console.readLineAsync();

    return numbers
      .split(STRINGS.winningDelimiter)
      .map((number) => Number(number.trim()));
  }
}

export default Screen;
