import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGE_LOTTO_COUNT,
  MESSAGE_NOTIFICATION,
  MESSAGE_RANK_RESULT,
} from '../constants/Message.js';

export function printBuyLotto(buyLottoCnt) {
  Console.print(MESSAGE_LOTTO_COUNT.buyLotto(buyLottoCnt));
}

// FIXME: 쉼표나 대괄호를 상수로 빼는게 좋을까?
export function printLottoArray(lottos) {
  const lottosList = [];
  lottos.forEach((lotto) => {
    lottosList.push(`[${lotto.join(', ')}]`);
  });
  lottosList.forEach((lotto) => Console.print(lotto));
}

export function printResult() {
  Console.print(MESSAGE_NOTIFICATION.result);
}

export function printResultDetail(result) {
  result.forEach((value, index) => {
    Console.print(Object.values(MESSAGE_RANK_RESULT)[index](value));
  });
}

export function printProfitRate(profitRate) {
  Console.print(`${MESSAGE_NOTIFICATION.profitRate} ${profitRate}%입니다.`);
}
