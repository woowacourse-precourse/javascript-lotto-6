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
   * "구입금액을 입력해 주세요."
   * @returns {string} 구입 금액
   */
  async inputPurchaseAmount() {
    // TEST:
    return '5000';

    return await Console.readLineAsync(MSG.prompt_purchase_amount);
  }

  /**
   * "당첨 번호를 입력해 주세요."
   * @returns {string} 쉼표로 구분된 당첨 번호 목록
   */
  async inputWinningNumbers() {
    // TEST:
    return '1,2,3,4,5,6';

    return await Console.readLineAsync(MSG.prompt_winning_numbers);
  }

  /**
   * "보너스 번호를 입력해 주세요."
   * @returns {string} 보너스 번호
   */
  async inputBonusNumber() {
    // TEST:
    return '7';

    return await Console.readLineAsync(MSG.prompt_bonus_number);
  }

  /**
   * "${purchaseQuantity}개를 구매했습니다."
   * @param {number} purchaseQuantity 구입 수량
   */
  displayPurchaseQuantity(purchaseQuantity) {
    Console.print(FormatString(
      MSG.purchase_result_f,
      [purchaseQuantity]
    ));
  }

  /**
   * "[${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}]"
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
   * 
   * @param {object} prizeStats 등수 별 당첨 횟수
   * @param {number} earningsRate 수익률(%)
   */
  displayPrizeStats(prizeStats, earningsRate) {
    Console.print(MSG.winning_stats);
    Console.print(MSG.winning_stats_separator);
    // TODO: 당첨통계
    Console.print(FormatString(
      MSG.total_profit_rate_f,
      [FormatNumberWithCommas(
        FormatNumberRound(
          earningsRate,
          OPT.rounding_precision)
      )]
    ));
  }
}

export default LottoGameView;
