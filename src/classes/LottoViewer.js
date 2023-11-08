import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE_AMOUNT, MATCH_COUNT, MESSAGE } from '../constant/lottoConstants';
import Formatter from './Formatter';

class LottoViewer {
  static purchasedLottos(lottoTickets) {
    const printTickets = lottoTickets
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');

    Console.print(`${lottoTickets.length}${MESSAGE.PURCHASED}\n${printTickets}`);
  }

  static winningResult(result) {
    // 개행 줄의 공백을 없애기 위해 replace 사용
    Console.print(`${MESSAGE.WINNING_STATISTICS}
      ${MATCH_COUNT.THREE}${MESSAGE.MATCH}${Formatter.numberFormat.format(LOTTO_PRIZE_AMOUNT.LAST_PLACE)}${MESSAGE.WON}${result.lastPrize}${MESSAGE.PIECES}
      ${MATCH_COUNT.FOUR}${MESSAGE.MATCH}${Formatter.numberFormat.format(LOTTO_PRIZE_AMOUNT.FOURTY_PLACE)}${MESSAGE.WON}${result.fourthPrize}${MESSAGE.PIECES}
      ${MATCH_COUNT.FIVE}${MESSAGE.MATCH}${Formatter.numberFormat.format(LOTTO_PRIZE_AMOUNT.THIRD_PLACE)}${MESSAGE.WON}${result.thirdPrize}${MESSAGE.PIECES}
      ${MATCH_COUNT.FIVE}${MESSAGE.BONUS_MATCH}${Formatter.numberFormat.format(LOTTO_PRIZE_AMOUNT.SECOND_PLACE)}${MESSAGE.WON}${result.secondPrize}${MESSAGE.PIECES}
      ${MATCH_COUNT.SIX}${MESSAGE.MATCH}${Formatter.numberFormat.format(LOTTO_PRIZE_AMOUNT.FIRST_PLACE)}${MESSAGE.WON}${result.firstPrize}${MESSAGE.PIECES}
    `.replace(/^ +/gm, ''));
  }

  static lottoProfitRate(profitRate) {
    Console.print(`${MESSAGE.TOTAL_PROFIT_RATE}${Formatter.numberFormat.format(Formatter.convertToTwoDecimalPoints(profitRate))}${MESSAGE.PERCENT}`);
  }
}

export default LottoViewer;
