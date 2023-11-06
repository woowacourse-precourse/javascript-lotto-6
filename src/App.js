import { print } from "./utils/print.js";
import { calcPurchaseQuantity } from "./Calc/calcPurchaseQuantity.js";
import {
  WINNING_NUMBERS_INPUT_REQUEST,
  BONUS_NUMBER_INPUT_REQUEST,
} from "./utils/message.js";
import { getValidBonusNumber } from "./GetValidBonusNumber.js";
import { calcResult } from "./Calc/CalcResult.js";
import { printResult } from "./PrintResult.js";
import { calcProfitRate } from "./Calc/CalcProfitRate.js";
import { Console } from "@woowacourse/mission-utils";

import Lotto from "./domain/Lotto.js";
import LottoMachine from "./domain/LottoMachine.js";
import Purchase from "./domain/Purchase.js";

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
    // 1. 구매 금액 받기
    const purchase = new Purchase();
    this.purchase_amount = await purchase.purchase();

    // 2. 구매 수량 구하기
    this.purchase_quantity = calcPurchaseQuantity(this.purchase_amount);

    // 3. 로또 발행하기
    const lotto_machine = new LottoMachine();
    this.lotto_list = lotto_machine.generateAllLottos(this.purchase_quantity);
    lotto_machine.printLottos(this.purchase_quantity, this.lotto_list);

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

const app = new App();
app.play();

export default App;
