import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  constructor() {}
  async play() {
    const purchasePrice = await this.inputPurchasePrice();
  }
  async inputPurchasePrice() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return +input;
  }
}
export default App;
