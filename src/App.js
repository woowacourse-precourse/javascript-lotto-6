import { MissionUtils } from "@woowacourse/mission-utils";
import { getPayment, purchaseLotto } from "./Human.js";
// import { compare } from './Compare.js';
import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoQuantity = await getPayment();
    const purchasedLottos = await purchaseLotto(lottoQuantity);
    const lottoNumber = await MissionUtils.Console.readLineAsync(
      "\n당첨번호를 입력해주세요.\n",
    );

    // const testLotto = new Lotto([1, 2, 3, 4, 5, 6, 7]);
    // const testLotto2 = new Lotto([1, 2, 3, 4, 5, 5]);
    // const theLotto = new Lotto(lottoNumber, null);
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n",
    );

    const theLotto1 = new Lotto(lottoNumber, bonusNumber);
    theLotto1.compare(purchasedLottos, lottoNumber, bonusNumber);
  }
}

export default App;

let test = new App();
test.play();
