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
   * "${purchaseQuantity}개를 구매했습니다."
   * @param {number} purchaseQuantity 
   */
  displayPurchaseQuantity(purchaseQuantity) {
    // TODO: 상수 사용
    Console.print(`${purchaseQuantity}개를 구매했습니다.`);
  }
}

export default LottoGameView;
