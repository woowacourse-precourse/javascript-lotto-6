import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants.js";
class LottoPurchased {
  async getPurchaseQuantity() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGE.PURCHASE_AMOUNT_INPUT + "\n"
    );
    return purchaseAmount / 1000;
  }

  getLottoNumbers(quantity, min, max, count) {
    //로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
    // 로또 번호는 1부터 45 사이의 숫자여야 한다.
    // 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.

    let myLottos = [];
    let myLotto = [];
    for (let i = 0; i < quantity; i++) {
      myLotto = Random.pickUniqueNumbersInRange(min, max, count);
      myLotto.sort((a, b) => a - b);
      myLottos.push(myLotto);
    }
    return myLottos;
  }
}

export default LottoPurchased;
