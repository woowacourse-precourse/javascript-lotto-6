import { Console } from '@woowacourse/mission-utils';

class View {
  static #PURCHASE_AMOUNT_QUERY = '구입금액을 입력해 주세요. ';

  static async askPurchaseAmount() {
    const answer = await Console.readLineAsync(View.#PURCHASE_AMOUNT_QUERY);
    return answer;
  }
}

export default View;
