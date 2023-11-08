import LottoService from '../services/LottoService.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  #service;

  #view;

  constructor() {
    this.#service = new LottoService();
    this.#view = new LottoView();
  }

  async play() {
    await this.#readPurchaseAmount();
    this.#buyLottos();
    this.#printLottos();
    await this.#readWinningNumbers();
    await this.#readBonusNumber();
    this.#printLottoResult();
    this.#printLottoTotalReturns();
  }

  // 스택 오버플로우를 방지하기 위해 재귀 대신 while loop를 사용
  async #readPurchaseAmount() {
    while (!this.#service.getPurchaseAmount()) {
      try {
        const purchaseAmount = await this.#view.readPurchaseAmount();
        this.#service.setPurchaseAmount(purchaseAmount);
      } catch (error) {
        this.#view.print(error.message);
      }
    }
    this.#view.printNewLine();
  }

  #buyLottos() {
    this.#service.buyLottos();
    const lottoCount = this.#service.getLottos().length;
    this.#view.printLottoCount(lottoCount);
  }

  #printLottos() {
    const lottos = this.#service.getLottos();
    this.#view.printLottos(lottos);
    this.#view.printNewLine();
  }

  // 스택 오버플로우를 방지하기 위해 재귀 대신 while loop를 사용
  async #readWinningNumbers() {
    while (!this.#service.getWinningNumbers()) {
      try {
        const winningNumbers = await this.#view.readWinningNumbers();
        this.#service.setWinningNumbers(winningNumbers);
      } catch (error) {
        this.#view.print(error.message);
      }
    }
    this.#view.printNewLine();
  }

  // 스택 오버플로우를 방지하기 위해 재귀 대신 while loop를 사용
  async #readBonusNumber() {
    while (!this.#service.getBonusNumber()) {
      try {
        const bonusNumber = await this.#view.readBonusNumber();
        this.#service.setBonusNumber(bonusNumber);
      } catch (error) {
        this.#view.print(error.message);
      }
    }
    this.#view.printNewLine();
  }

  #printLottoResult() {
    const lottoResult = this.#service.getLottoResult();
    this.#view.printLottoResult(lottoResult);
  }

  #printLottoTotalReturns() {
    const lottoTotalReturns = this.#service.getLottoTotalReturns();
    this.#view.printLottoTotalReturns(lottoTotalReturns);
  }
}

export default LottoController;
