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
    this.purchase_amount = await this.getPurchaseAmount();
    this.purchase_quantity = this.calculatePurchaseQuantity(
      this.purchase_amount
    );
    this.generateLottos(this.purchase_quantity);
    await this.getWinningNumber();
    await this.getBonusNumber();
    this.compareAndPrintRank();
    this.calculateAndPrintProfit();
  }

  async getPurchaseAmount() {
    const purchase = new Purchase();
    return await purchase.purchase();
  }

  calculatePurchaseQuantity(purchaseAmount) {
    const purchase = new Purchase();
    return purchase.calculatePurchaseQuantity(purchaseAmount);
  }

  generateLottos(purchaseQuantity) {
    const lotto_machine = new LottoMachine();
    this.lotto_list = lotto_machine.generateAllLottos(purchaseQuantity);
    lotto_machine.printLottos(purchaseQuantity, this.lotto_list);
  }

  async getWinningNumber() {
    const winning_number = new WinningNumber();
    this.winning_number = await winning_number.getWinningNumber();
  }

  async getBonusNumber() {
    const bonus_number = new BonusNumber();
    this.bonus_number = await bonus_number.getBonusNumber(this.winning_number);
  }

  compareAndPrintRank() {
    const ranking = new Ranking();
    this.rank_result = ranking.compareRank(
      this.lotto_list,
      this.winning_number,
      this.bonus_number
    );
    ranking.printRank(this.rank_result);
  }

  calculateAndPrintProfit() {
    const profit = new Profit();
    profit.returnProfit(this.rank_result, this.purchase_amount);
  }
}

export default App;
