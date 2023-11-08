import Lotto from '../model/Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class LottoGameView {

  /** 빈 줄을 출력한다. */
  breakLine() {
    // TODO: 상수 사용
    Console.print('');
  }

  /**
   * "구입금액을 입력해 주세요."
   * @returns {string} 구입 금액
   */
  async inputPurchaseAmount() {
    // TEST:
    return '5000';

    // TODO: Message 추가
    return await Console.readLineAsync();
  }

  /**
   * "당첨 번호를 입력해 주세요."
   * @returns {string} 쉼표로 구분된 당첨 번호 목록
   */
  async inputWinningNumbers() {
    // TEST:
    return '1,2,3,4,5,6';

    // TODO: Message 추가
    return await Console.readLineAsync();
  }

  /**
   * "보너스 번호를 입력해 주세요."
   * @returns {string} 보너스 번호
   */
  async inputBonusNumber() {
    // TEST:
    return '7';

    // TODO: Message 추가
    return await Console.readLineAsync();
  }

  /**
   * "${purchaseQuantity}개를 구매했습니다."
   * @param {number} purchaseQuantity 구입 수량
   */
  displayPurchaseQuantity(purchaseQuantity) {
    // TODO: 상수 사용
    Console.print(`${purchaseQuantity}개를 구매했습니다.`);
  }

  /**
   * "[${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}]"
   * @param {Array<Lotto>} tickets 구입한 티켓 배열
   */
  displayTickets(tickets) {
    tickets.forEach((ticket) => {
      // TODO: 상수 사용, 쉼표 후 공백
      Console.print(`[${ticket.getNumbers()}]`);
    });
  }

  displayPrizeStats(prizeStats, earningsRate) {
    // TODO: 상수 사용
    Console.print('당첨 통계');
    Console.print('---');
  }
}

export default LottoGameView;
