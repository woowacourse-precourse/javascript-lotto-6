import { Console, Random } from "@woowacourse/mission-utils";
import { BUY_LOTTO, LOTTO_COUNT, PRINT_PURCHASE_LOTTO } from "./GameComment.";
import Lotto from "./Lotto";
class App {
  validPrice(price) {
     if(isNaN(price)) throw new Error("[ERROR]");
    if(price%1000) throw new Error("[ERROR]");

    return price/1000;
  }

  drawLotto(lottoContainer, count) {
    for(let i=0; i<count; i++) {
      const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoContainer[i] = new Lotto(lottoNums);
    }
    Console.print(PRINT_PURCHASE_LOTTO(lottoContainer));
  }

  async play() {
    const price = await Console.readLineAsync(BUY_LOTTO);
    console.log(price);
    const count = this.validPrice(price);
    
    Console.print(LOTTO_COUNT(count));

    const lottoContainer = Array.from(count).fill(null);

    this.drawLotto(lottoContainer, count)

  }
}

export default App;
