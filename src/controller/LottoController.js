import InputView from "../view/InputView.js";
import InputValidation from "./InputValidation.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";
import Purchase from "../model/Purchase.js";
import Lotto from "../model/Lotto.js";
export default class LottoController {
  #inputView;
  #outputView;
  #inputValidation;
  #lotto;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#inputValidation = Object.create(InputValidation);
  }

  async run() {
    const { lottoTickets, lottoPrice } = await this.#createLottoArrays();
    const { result, calculateProfitRate } = await this.#makeLotto(lottoTickets,lottoPrice);
    this.#outputView.printResult(result, calculateProfitRate);
  }

  async #makeLotto(lottoTickets, lottoPrice) {
    try {
      const { winningNumberArray, bonusNumber } =
        await this.#createWinningNumberArrays();
      this.#lotto = new Lotto(winningNumberArray, bonusNumber);
      const { result, calculateProfitRate } = this.#lotto.checkLotto(
        lottoTickets,
        bonusNumber,
        lottoPrice
      );
      return { result, calculateProfitRate };
    } catch (e) {
      Console.print(e.message);
      return this.#makeLotto(lottoTickets, lottoPrice);
    }
  }

  async #getPrice() {
    try {
      const lottoPrice = await this.#inputView.readLottoPrice();
      await this.#inputValidation.isPrice(lottoPrice);
      return lottoPrice;
    } catch (e) {
      Console.print("[ERROR]" + e.message);
      return this.#getPrice();
    }
  }

  async #createLottoArrays() {
    const lottoPrice = await this.#getPrice();
    const lottoTickets = Purchase.makeLottoArray(lottoPrice);
    this.#outputView.printLottoTickets(lottoTickets);
    return { lottoTickets, lottoPrice };
  }

  async #createWinningNumberArrays() {
    const winningNumberArray = await this.#inputView.readWinningNumberArray();
    const bonusNumber = await this.#inputView.readBonusNumber();
    this.#inputValidation.isWinningArray(winningNumberArray);
    this.#inputValidation.isBonus(bonusNumber);
    return { winningNumberArray, bonusNumber };
  }
}
