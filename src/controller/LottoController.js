import LottoHandler from "../lottoHandler/LottoHandler";
import View from "../view/View";

class LottoController {
  #view;

  #lottoHandler;

  constructor() {
    this.#view = new View();
    this.#lottoHandler = new LottoHandler();
  }

  async startLotto() {
    const lottoArray = await this.#createLottoArray();
    this.#view.showLottoNumber(lottoArray);

    const winningLotto = await this.#getWinningLotto();
    const lottoRanking = this.#getLottoRanking(lottoArray, winningLotto);
    this.#view.printRankResult(lottoRanking);

    const prize = this.#getLottoPrize(lottoRanking);
    this.#view.printEarningRate(prize, lottoArray);
  }

  async #createLottoArray() {
    const cash = await this.#view.getPurchase();
    const count = this.#lottoHandler.getLottoCount(cash);

    return Array.from({ length: count }, () =>
      this.#lottoHandler.createLotto()
    );
  }

  async #getWinningLotto() {
    const winningLotto = await this.#view.getWinningLotto();
    await this.#view.getBonusNumber(winningLotto);

    return winningLotto;
  }

  #getLottoRanking(lottoArray, winningLotto) {
    const winningCount = this.#lottoHandler.getLottoResult(lottoArray, winningLotto);

    return this.#lottoHandler.getRanking(winningCount);
  }

  #getLottoPrize(ranking) {
    return this.#lottoHandler.getPrize(ranking);
  }
}

export default LottoController;
