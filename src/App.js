import LottoMachine from "./domain/LottoMachine.js";
import Purchase from "./domain/Purchase.js";
import WinningNumber from "./domain/WinningNumber.js";
import BonusNumber from "./domain/BonusNumber.js";
import Ranking from "./domain/Ranking.js";
import Profit from "./domain/Profit.js";

class App {
  constructor() {
    this.purchase_amount = null;
    this.purchase_quantity = null;
    this.lotto_list = [];
    this.winning_number = [];
    this.bonus_number = null;
    this.rank_result = null;
  }

  async play() {
    // 1. 구매 금액 입력 받기
    const purchase = new Purchase();
    this.purchase_amount = await purchase.purchase();
    this.purchase_quantity = purchase.calcPurchaseQuantity(
      this.purchase_amount
    );

    // 2. 로또 발행하기
    const lotto_machine = new LottoMachine();
    this.lotto_list = lotto_machine.generateAllLottos(this.purchase_quantity);
    lotto_machine.printLottos(this.purchase_quantity, this.lotto_list);

    // 3. 당첨 번호 입력받기
    const winning_number = new WinningNumber();
    this.winning_number = await winning_number.getWinningNumber();

    // 4. 보너스 번호 입력받기
    const bonus_number = new BonusNumber();
    this.bonus_number = await bonus_number.getBonusNumber(this.winning_number);

    // 5. 로또 번호와 당첨 번호 비교하기
    const ranking = new Ranking();
    this.rank_result = ranking.compareRank(
      this.lotto_list,
      this.winning_number,
      this.bonus_number
    );

    // 6. 당첨 통계 출력하기
    ranking.printRank(this.rank_result);
    const profit = new Profit();
    profit.returnProfit(this.rank_result, this.purchase_amount);
  }
}

export default App;
