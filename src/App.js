import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";
import { ERROR } from "./const/error";
import inputNumbers from "./control/input";
import progressLotto from "./control/progress";
import printLottos from "./control/print";

class App {
  #inputNumbers = new inputNumbers();

  #progressLotto = new progressLotto();
  
  #printLottos = new printLottos();

  constructor() {
    this.winning = [];
    this.bonus = 0;
    this.count = 0;
  }
  async play() {
    this.getLottoPrice();
    this.#progressLotto.getMyLottos();
    this.#inputNumbers.getNumbers();
    this.#inputNumbers.getBonusNumbers();
    this.#printLottos.printWinningStatics(sameNumberObject)
  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
    this.count = this.checkPrice(priceInput);
  }

  checkPrice(priceInput) {
    const checkPrice = parseInt(priceInput);
    const remainder = checkPrice % 1000;

    if(remainder !== 0 ){throw new Error(ERROR.THOUSAND)};
    return checkPrice;
  }

// 이후 getNumers에서 입력 받기 전에 몇개 구매한지 출력해야 함

}

export default App;
