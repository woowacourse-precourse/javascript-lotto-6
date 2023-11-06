import InputView from "../view/InputView.js";
import InputValidation from "./InputValidation.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";
import Purchase from "../model/Purchase.js";
import Lotto from "../model/Lotto.js";
export default class LottoController {
  #inputView;
  #outputView;
  #inputValidation;
  #lotto
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#inputValidation = Object.create(InputValidation);
  }

  async run() {
    const purchaseTickets = await this.#createLottoArrays();
    const {winningNumberArray,bonusNumber} = await this.#createWinningNumberArrays();
    this.#lotto = new Lotto(winningNumberArray,bonusNumber);
  }

  async #createLottoArrays() {
    const lottoPrice = await this.#inputView.readLottoPrice();
    this.#inputValidation.isPrice(lottoPrice);
    const lottoTickets = Purchase.makeTicket(lottoPrice);
    this.#outputView.printLottoTickets(lottoTickets);
    return lottoTickets;
  }

  async #createWinningNumberArrays() {
    const winningNumberArray = await this.#inputView.readWinningNumberArray();
    const bonusNumber = await this.#inputView.readBonusNumber();
    this.#inputValidation.isWinningArray(winningNumberArray)
    this.#inputValidation.isBonus(bonusNumber)
    return {winningNumberArray,bonusNumber}

  }
}
