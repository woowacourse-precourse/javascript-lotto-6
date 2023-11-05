import { Console } from '@woowacourse/mission-utils';
import { QUERY } from './Message.js';

class View {
  static async askPurchaseAmount() {
    const answer = await Console.readLineAsync(QUERY.purchaseAmount);
    return answer;
  }

  static async print(message) {
    Console.print(message);
  }
}

export default View;
