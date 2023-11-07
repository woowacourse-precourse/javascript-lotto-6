import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import validatePrice from "./validatePrice.js";
import PrintOutput from "./PrintOutput.js";

class App {
  async play() {
    const validPrice = await this.getPrice();
    const printOutput = new PrintOutput();
    const lottoNumSets = await printOutput.printLottoNumSet(validPrice);
    const numbers = await this.getSixNum();
    const lotto = new Lotto(numbers);
    await lotto.start(validPrice, lottoNumSets);
  }

  getPrice = async () => {
    let validPrice = 0;
    while(validPrice === 0) {
      try {
        let price = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
        validPrice = validatePrice(price);
      } catch(error) {
        Console.print(error.message);
      }
    }
    return validPrice;
  };

  getSixNum = async () => {
    let sixNum = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return sixNum;
  };
}

export default App;