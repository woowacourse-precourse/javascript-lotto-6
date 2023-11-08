import { Console } from '@woowacourse/mission-utils';
import {
  MESSAGE_LOTTO_COUNT,
  MESSAGE_NOTIFICATION,
  MESSAGE_RANK_RESULT,
} from '../constants/Message.js';
import { BRACKET_CLOSE, BRACKET_OPEN, SPACE_COMMA } from '../constants/GameSetting.js';

export function printBuyLotto(buyLottoCnt) {
  Console.print(MESSAGE_LOTTO_COUNT.buyLotto(buyLottoCnt));
}

export function printLottoArray(lottos) {
  const lottosList = [];
  lottos.forEach((lotto) => {
    lottosList.push(`${BRACKET_OPEN}${lotto.join(SPACE_COMMA)}${BRACKET_CLOSE}`);
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
