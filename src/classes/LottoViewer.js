import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE_AMOUNT, MESSAGE } from '../constant/lottoConstants';
import Formatter from './Formatter';

class LottoViewer {
  static purchasedLottos(lottoTickets) {
    const printTickets = lottoTickets
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');

    Console.print(`${lottoTickets.length}${MESSAGE.PURCHASED}\n${printTickets}`);
  }

  static winningResult(result) {
    const formatter = Formatter.numberFormat();
    // 개행 줄의 공백을 없애기 위해 replace 사용
    Console.print(`당첨통계
      ---
      3개 일치 (${formatter.format(LOTTO_PRIZE_AMOUNT.LAST_PLACE)}원) - ${result.lastPrize}개
      4개 일치 (${formatter.format(LOTTO_PRIZE_AMOUNT.FOURTY_PLACE)}원) - ${result.fourthPrize}개
      5개 일치 (${formatter.format(LOTTO_PRIZE_AMOUNT.THIRD_PLACE)}원) - ${result.thirdPrize}개
      5개 일치, 보너스 볼 일치 (${formatter.format(LOTTO_PRIZE_AMOUNT.SECOND_PLACE)}원) - ${result.secondPrize}개
      6개 일치 (${formatter.format(LOTTO_PRIZE_AMOUNT.FIRST_PLACE)}원) - ${result.firstPrize}개
    `.replace(/^ +/gm, ''));
  }

  static lottoProfitRate(profitRate) {
    const formatter = Formatter.numberFormat();
    Console.print(`총 수익률은 ${formatter.format(Formatter.convertToTwoDecimalPoints(profitRate))}%입니다.`);
  }
}

export default LottoViewer;
