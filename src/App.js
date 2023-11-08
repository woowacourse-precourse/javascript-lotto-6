import { MissionUtils } from "@woowacourse/mission-utils";
import { getPayment, purchaseLotto, askNumbers } from "./Human.js";
import Lotto from "./Lotto.js";
// import { compare } from './Compare.js';

class App {
  async play() {
    const lottoQuantity = await getPayment();
    const purchasedLottos = await purchaseLotto(lottoQuantity);

    async function playGame() {
      const [lottoNumber, bonusNumber] = await askNumbers();
      try {
        const theLotto1 = new Lotto(lottoNumber, bonusNumber);
        theLotto1.compare(purchasedLottos, lottoNumber, bonusNumber);
      } catch (error) {
        MissionUtils.Console.print(error);
        playGame();
      }
    }

    await playGame();
  }
}

export default App;

let test = new App();
test.play();
