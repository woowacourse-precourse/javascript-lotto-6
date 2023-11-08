import Lotto from '../model/Lotto.js';
import { MESSAGES as MSG } from '../constant/Messages.js';
import { LOTTO_GAME_OPTIONS as OPT } from '../constant/Options.js';
import { Console } from '@woowacourse/mission-utils';
import {
  FormatString,
  FormatNumberRound,
  FormatNumberWithCommas
} from '../utility/Format.js';

class LottoGameView {

  /** 빈 줄을 출력한다. */
  breakLine() {
    Console.print(MSG.null);
  }

  /**
   * 문자열을 출력한다.
   * @param {string} message 출력할 문자열
   */
  print(message) {
    Console.print(message);
  }

  /**
   * 구입금액을 입력받는다.
   * @returns {string} 구입 금액
   */
  async inputPurchaseAmount() {
    return await Console.readLineAsync(MSG.prompt_purchase_amount);
  }

  /**
   * 당첨번호를 입력받는다.
   * @returns {string} 쉼표로 구분된 당첨 번호 목록
   */
  async inputWinningNumbers() {
    return await Console.readLineAsync(MSG.prompt_winning_numbers);
  }

  /**
   * 보너스번호를 입력받는다.
   * @returns {string} 보너스 번호
   */
  async inputBonusNumber() {
    return await Console.readLineAsync(MSG.prompt_bonus_number);
  }

  /**
   * 티켓 구입 수량 안내 메시지를 출력한다.
   * @param {number} purchaseQuantity 구입 수량
   */
  displayPurchaseQuantity(purchaseQuantity) {
    Console.print(FormatString(
      MSG.purchase_result_f,
      [purchaseQuantity]
    ));
  }

  /**
   * 티켓들의 로또 번호를 출력한다.
   * @param {Array<Lotto>} tickets 구입한 티켓 배열
   */
  displayTickets(tickets) {
    tickets.forEach((ticket) => {
      Console.print(FormatString(
        MSG.lotto_numbers_f,
        ticket.getNumbers()
      ));
    });
  }

  /**
   * 당첨 통계를 출력한다.
   * @param {object} prizeStats 등수 별 당첨 횟수
   * @param {number} earningsRate 수익률(%)
   */
  displayPrizeStats(prizeStats, earningsRate) {
    Console.print(MSG.winning_stats);
    Console.print(MSG.winning_stats_separator);

    OPT.prize_stats_sequence.forEach((rank) => {
      const prize = OPT.prize[rank];
      Console.print(FormatString(
        MSG.winning_result_f, [
        prize.match,
        prize.bonusMatch === true ? MSG.bonus_match : MSG.null,
        FormatNumberWithCommas(prize.amount),
        prizeStats[rank]
      ]
      ));
    });

    Console.print(FormatString(
      MSG.total_profit_rate_f, [
      FormatNumberWithCommas(
        FormatNumberRound(
          earningsRate,
          OPT.rounding_precision
        )
      )]
    ));
  }
}

export default LottoGameView;
