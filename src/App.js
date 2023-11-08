import PurchaseController from './controller/PurchaseController.js';
import RaffleController from './controller/RaffleController.js';
import ResultController from './controller/ResultController.js';

class App {
  #purchaseController;
  #raffleController;
  #resultController;

  constructor() {
    this.#purchaseController = new PurchaseController();
    this.#raffleController = new RaffleController();
    this.#resultController = new ResultController();
  }

  async play() {
    await this.#purchaseController.purchaseLotto();
    this.#purchaseController.printLottos();
    await this.#raffleController.raffleNumber();
    await this.#raffleController.raffleBonus();
    this.#resultController.setResult(
      this.#purchaseController.getLottos(),
      this.#raffleController.getRaffle(),
    );
    this.#resultController.calculateResults();
    this.#resultController.printResult();
  }
}

export default App;
