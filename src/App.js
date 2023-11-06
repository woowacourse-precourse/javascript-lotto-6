import { print } from "./utils/print.js";
import { calcPurchaseQuantity } from "./Calc/CalcPurchaseQuantity.js";
import {
  PURCHASE_AMOUNT_INPUT_REQUEST,
  WINNING_NUMBERS_INPUT_REQUEST,
  BONUS_NUMBER_INPUT_REQUEST,
} from "./utils/message.js";
import { getValidPurchaseAmount } from "./ValidateInput/ValidatePurchaseAmount.js";
import { getValidBonusNumber } from "./GetValidBonusNumber.js";
import { calcResult } from "./Calc/CalcResult.js";
import { printResult } from "./PrintResult.js";
import { calcProfitRate } from "./Calc/CalcProfitRate.js";
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./domain/Lotto.js";
import LottoMachine from "./LottoMachine.js";

class App {
  purchase_amount;
  purchase_quantity;
  lotto_list;
  winning_number;
  bonus_number;

  constructor(
    purchase_amount,
    purchase_quantity,
    lotto_list,
    winning_number,
    bonus_number
  ) {
    this.purchase_amount = purchase_amount;
    this.purchase_quantity = purchase_quantity;
    this.lotto_list = lotto_list;
    this.winning_number = winning_number;
    this.bonus_number = bonus_number;
  }

  async play() {
    print(PURCHASE_AMOUNT_INPUT_REQUEST);
    // 2. 구입 금액 입력받기
    this.purchase_amount = await getValidPurchaseAmount();
    // 3. 구매 수량 구하기
    this.purchase_quantity = calcPurchaseQuantity(this.purchase_amount);
    // 4. 로또 발행하기
    const LOTTO_MACHINE = new LottoMachine();
    this.lotto_list = LOTTO_MACHINE.returnLotto(this.purchase_quantity);
    // 5. 구매 수량 출력하기
    print(`\n${this.purchase_quantity}개를 구매했습니다.`);
    // 6. 발행한 로또 모두 출력하기
    this.lotto_list.map((lotto) => print(`[${lotto.join(", ")}]`));
    // 7. 당첨 번호 입력 안내 문구 출력
    print(`\n${WINNING_NUMBERS_INPUT_REQUEST}`);
    // 8. 당첨 번호 입력받기
    const input = await Console.readLineAsync("");
    const numbers = input.split(",");
    const LOTTO = new Lotto(numbers);

    let number = LOTTO.returnNumbers(numbers);
    this.winning_number = number.map(Number);
    // 9. 보너스 번호 입력 안내 문구 출력
    print(`\n${BONUS_NUMBER_INPUT_REQUEST}`);
    // 10. 보너스 번호 입력받기
    this.bonus_number = await getValidBonusNumber();
    // 11. 발행한 로또 번호와 당첨 번호 비교하기
    const result = calcResult(
      this.lotto_list,
      this.winning_number,
      this.bonus_number
    );
    // 12. 당첨 내역 출력하기
    printResult(result);
    // 13. 총 수익률 구하기
    const profit = calcProfitRate(result, this.purchase_amount);
    // 14. 총 수익률 출력하기
    print(`총 수익률은 ${profit}%입니다.`);
  }
}

// const app = new App();
// await app.play();

export default App;
