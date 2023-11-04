import { Console } from "@woowacourse/mission-utils";
import { getPurchaseAmount, getLuckyNumber, getBonusNumber } from "./ui/Input.js";
import LotteryMachine from "./domain/LotteryMachine.js";


class App {
  async play() {

    const purchaseAmount = await getPurchaseAmount();
    
    const lottoCounter = new LotteryMachine(purchaseAmount);
    console.log(lottoCounter.getTiket());

    const luckyNumber = await getLuckyNumber();

    const bonusNumber = await getBonusNumber(luckyNumber);

    console.log(purchaseAmount);
    console.log(luckyNumber);
    console.log(bonusNumber);
  }
}




export default App;
