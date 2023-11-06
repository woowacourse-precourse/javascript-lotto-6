import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import ValidatePrice from "./ValidatePrice.js";
import PrintOutput from "./PrintOutput.js";

class App {
  async play() {
    await this.getPrice();
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
}

export default App;