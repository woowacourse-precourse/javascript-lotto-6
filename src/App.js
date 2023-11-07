import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import validatePrice from "./validatePrice.js";
import PrintOutput from "./PrintOutput.js";

class App {
  async play() {
    const validPrice = await this.getPrice();
    PrintOutput.printLottoNumSet(validPrice);
    const numbers = await this.getSixNum();
    const lotto = new Lotto(numbers);
    await lotto.start();
  }

  getPrice = async () => {
    let price;
    let validPrice = 0;
    do {
      try {
        price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
        validPrice = validatePrice(price);
      } catch(error) {
        throw new Error(error.message);
      }
    } while(validPrice === 0);
    return validPrice;
  };

  getSixNum = async () => {
    let sixNum = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return sixNum;
  };
}

export default App;