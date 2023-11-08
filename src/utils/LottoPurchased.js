import { Random, Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from "../Constants.js";
import Purchase from "../errors/Purchase.js";
import { InputView } from "../view/inputVeiw.js";
class LottoPurchased {
  async getPurchaseQuantity() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await InputView.readPurchaseAmount();

        break;
      } catch (error) {
        Console.print(ERROR_MESSAGE.NOT_DIVISIBLE_BY_1000);
      }
    }

    const purchaseQuantity = purchaseAmount / 1000;
    Console.print(purchaseQuantity + CONSOLE_MESSAGE.PURCHASE_AMOUNT);
    return purchaseQuantity;
  }

  async getLottoNumbers(quantity, min, max, count) {
    let myLottos = [];

    for (let i = 0; i < quantity; i++) {
      const myLotto = await Random.pickUniqueNumbersInRange(min, max, count);
      myLotto.sort((a, b) => a - b);
      myLottos.push(myLotto);
    }

    return myLottos;
  }

  printLottoNumbers(lottoArr) {
    lottoArr.map((lotto) => {
      const lottoStr = lotto.join(", ");
      Console.print("[" + lottoStr + "]");
    });
  }
}

export default LottoPurchased;
