import { Console } from '@woowacourse/mission-utils';
import {
  MATCH_3_PRIZE,
  MATCH_4_PRIZE,
  MATCH_5_BONUS_PRIZE,
  MATCH_5_PRIZE,
  MATCH_6_PRIZE,
  PURCHASE_MESSAGE_SUFFIX,
  QUANTITY_SUFFIX,
  RATE_OF_RETURN_MESSAGE_PREFIX,
  RATE_OF_RETURN_MESSAGE_SUFFIX,
  WINNING_STATISTICS_SEPARATOR,
  WINNING_STATISTICS_TITLE
} from '../Constants/Message.js';
import { COMMA_WITH_SPACE, DECIMAL_PRECISION_ONE, LOTTO_TICKET_PRICE } from '../Constants/Constant.js';

class OutputView {  
  static displayNumberOfPurchase(purchaseAmount) {
    const numberOfPurchase = purchaseAmount / LOTTO_TICKET_PRICE;
    Console.print(`\n${numberOfPurchase}${PURCHASE_MESSAGE_SUFFIX}`);
  }

  static displayLotto(lotto) {
    Console.print(`[${lotto.join(COMMA_WITH_SPACE)}]`);
  }

  static displayWinningDetails(rank) {
    Console.print(WINNING_STATISTICS_TITLE);
    Console.print(WINNING_STATISTICS_SEPARATOR);
    Console.print(`${MATCH_3_PRIZE}${rank[4]}${QUANTITY_SUFFIX}`);
    Console.print(`${MATCH_4_PRIZE}${rank[3]}${QUANTITY_SUFFIX}`);
    Console.print(`${MATCH_5_PRIZE}${rank[2]}${QUANTITY_SUFFIX}`);
    Console.print(`${MATCH_5_BONUS_PRIZE}${rank[1]}${QUANTITY_SUFFIX}`);
    Console.print(`${MATCH_6_PRIZE}${rank[0]}${QUANTITY_SUFFIX}`);
  }

  static displayRateOfReturn(rateOfReturn) {
    Console.print(`${RATE_OF_RETURN_MESSAGE_PREFIX}${parseFloat(rateOfReturn.toFixed(DECIMAL_PRECISION_ONE)).toLocaleString()}${RATE_OF_RETURN_MESSAGE_SUFFIX}`);
  }
}

export default OutputView;
