import { Random, Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from "../Constants.js";
import { validatePurchaseAmount } from "./Validator.js";
class LottoPurchased {
  async getPurchaseQuantity() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await Console.readLineAsync(
          CONSOLE_MESSAGE.PURCHASE_AMOUNT_INPUT + "\n"
        );

        validatePurchaseAmount(purchaseAmount);
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
    //로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
    // 로또 번호는 1부터 45 사이의 숫자여야 한다.
    // 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.

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
