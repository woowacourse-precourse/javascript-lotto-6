import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/gameConstant";
import GetInputValue from "./GetInputValue";
class App {
  async play() {
    try {
      Console.print("게임 시작");
      const purchaseAmount = await GetInputValue.getPurchaseAmount();
      Console.print(`${purchaseAmount/1000}${GAME_MESSAGE.PURCHASE_AMOUNT}`);
      for(let i=0; i<purchaseAmount/1000; i++){
        const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        Console.print(lottoNumbers);
      }
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
