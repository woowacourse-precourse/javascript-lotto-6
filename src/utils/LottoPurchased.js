import { Random, Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants.js";
import { InputView } from "../view/InputVeiw.js";
import { PrintView } from "../view/printView.js";
class LottoPurchased {
  async getPurchaseQuantity() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await InputView.readPurchaseAmount();

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const purchaseQuantity = purchaseAmount / 1000;
    PrintView.printpurchaseQuantity(purchaseQuantity);

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
}

export default LottoPurchased;
