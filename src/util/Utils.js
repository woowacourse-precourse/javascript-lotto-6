import { Random, Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGES from '../constant/constants.js';

async function getPurchasingMoney() {
  const purchasingMoney = await Console.readLineAsync(
    INPUT_MESSAGES.purcahsingMoney,
  );
  return purchasingMoney;
}

getPurchasingMoney();
