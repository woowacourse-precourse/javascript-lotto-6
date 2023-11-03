import { Console } from "@woowacourse/mission-utils";
import inputView from "./View/inputView.js";

class App {
  async play() {
    const purchase = await inputView.readPurchasePriceAsync("구입금액을 입력해 주세요.\n");
    Console.print(purchase);
  }
}

export default App;
