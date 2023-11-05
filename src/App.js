import { printMessage } from "./PrintMessages.js";
import { getPurchaseAmount } from "./GetPurchaseAmount.js";
import { calcPurchaseQuantity } from "./calcPurchaseQuantity.js";
import {
  PURCHASE_AMOUNT_INPUT_REQUEST,
  WINNING_NUMBERS_INPUT_REQUEST,
} from "./constants.js";
import { validatePurchaseAmount } from "./ValidatePurchaseAmount.js";
import { validateWinningNumber } from "./ValidateWinningNumber.js";
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #purchase_amount;
  #purchase_quantity;
  #lotto_list;
  #winning_number;

  constructor(purchase_amount, purchase_quantity, lotto_list, winning_number) {
    this.#purchase_amount = purchase_amount;
    this.#purchase_quantity = purchase_quantity;
    this.#lotto_list = lotto_list;
    this.#winning_number = winning_number;
  }

  async play() {
    // 1. 구입 금액 입력 안내
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
    // 2. 구입 금액 입력받기
    this.#purchase_amount = await getPurchaseAmount(validatePurchaseAmount);
    // 3. 구매 수량 구하기
    this.#purchase_quantity = calcPurchaseQuantity(this.#purchase_amount);
    // 4. 로또 발행하기
    const LOTTO = new Lotto();
    this.#lotto_list = LOTTO.returnLotto(this.#purchase_quantity);
    // 5. 구매 수량 출력하기
    printMessage("\n");
    printMessage(`${this.#purchase_quantity}개를 구매했습니다.`);
    // 6. 발행한 로또 모두 출력하기
    this.#lotto_list.map((lotto) => printMessage(lotto));
    // 7. 당첨 번호 입력 안내 문구 출력
    printMessage("\n");
    printMessage(WINNING_NUMBERS_INPUT_REQUEST);
    // this.#winning_number = await getPurchaseAmount(validateWinningNumber);
  }
}

const app = new App();
await app.play();

export default App;
