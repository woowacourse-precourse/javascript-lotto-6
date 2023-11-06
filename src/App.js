import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import ValidatePrice from "./ValidatePrice.js";
import PrintOutput from "./PrintOutput.js";

class App {
  async play() {
    await this.getPrice();
    const numbers = await this.getSixNum();
    const lotto = new Lotto(numbers);
    await lotto.start();
  }

  getPrice = async () => {
    let price;
    do {
      try {
        price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
        price = ValidatePrice(price);
      } catch(error) {
        throw new Error(error.message);
      }
    } while(!price);

    PrintOutput.printLottoNumSet(price);
  };

  getSixNum = async () => {
    let sixNum = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return sixNum;
  };
}

export default App;