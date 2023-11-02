import Lotto from "./Lotto.js";
import lottoPriceInput from "./LottoPriceInput.js";
import excutionNumber from "./excutionNumber.js";
import priceCheck from "./priceCheck.js";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async play() {
    const price = await lottoPriceInput("구입금액을 입력해 주세요.");
    const purchase = priceCheck(price);
    // const lotto = new Lotto(
    //   MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    // );
    // console.log(lotto.numbers);
    // console.log(
    //   new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)).numbers
    // );
    const excution = excutionNumber(purchase);
    console.log(excution);
  }
}

const app = new App();
app.play();
export default App;
