import { calcPurchaseQuantity } from "./Calc/calcPurchaseQuantity.js";

import LottoMachine from "./domain/LottoMachine.js";
import Purchase from "./domain/Purchase.js";
import WinningNumber from "./domain/WinningNumber.js";
import BonusNumber from "./domain/BonusNumber.js";
import Ranking from "./domain/Ranking.js";
import Profit from "./domain/Profit.js";

class App {
  purchase_amount;
  purchase_quantity;
  lotto_list;
  winning_number;
  bonus_number;
  rank_result;

  constructor(
    purchase_amount,
    purchase_quantity,
    lotto_list,
    winning_number,
    bonus_number,
    rank_result
  ) {
    this.purchase_amount = purchase_amount;
    this.purchase_quantity = purchase_quantity;
    this.lotto_list = lotto_list;
    this.winning_number = winning_number;
    this.bonus_number = bonus_number;
    this.rank_result = rank_result;
  }

  async play() {
    // 1. 구매 금액 입력 받기
    const purchase = new Purchase();
    this.purchase_amount = await purchase.purchase();

    // 2. 구매 수량 구하기
    this.purchase_quantity = calcPurchaseQuantity(this.purchase_amount);

    // 3. 로또 발행하기
    const lotto_machine = new LottoMachine();
    this.lotto_list = lotto_machine.generateAllLottos(this.purchase_quantity);
    lotto_machine.printLottos(this.purchase_quantity, this.lotto_list);

    // 4. 당첨 번호 입력받기
    const winning_number = new WinningNumber();
    this.winning_number = await winning_number.getWinningNumber();

    // 5. 보너스 번호 입력받기
    const bonus_number = new BonusNumber();
    this.bonus_number = await bonus_number.getBonusNumber();

    // 6. 발행한 로또 번호와 당첨 번호 비교하기
    const ranking = new Ranking();
    this.rank_result = ranking.returnRank(
      this.lotto_list,
      this.winning_number,
      this.bonus_number
    );

    // 7. 당첨 내역 출력하기
    ranking.printRank(this.rank_result);

    // 8. 총 수익률 출력하기
    const profit = new Profit();
    profit.retrunProfit(this.rank_result, this.purchase_amount);
  }
}

// const app = new App();
// app.play();

export default App;
