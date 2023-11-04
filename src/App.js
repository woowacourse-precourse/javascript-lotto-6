import { Console, Random } from "@woowacourse/mission-utils";
import { BUY_LOTTO, LOTTO_COUNT } from "./GameComment.";
class App {

  validPrice(price) {
     if(isNaN(price)) throw new Error("[ERROR]");
    if(price%1000) throw new Error("[ERROR]");

    return price/1000;
  }

  async play() {
    const price = await Console.readLineAsync(BUY_LOTTO);
    console.log(price);
    const count = this.validPrice(price);
    
    Console.print(LOTTO_COUNT(count));
  }
}

export default App;
