import InputView from "../view/InputView.js";
import InputValidation from "./InputValidation.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";
import Purchase from "../model/Purchase.js";
export default class LottoController {
  #inputView;
  #outputView;
  #inputValidation;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#inputValidation = Object.create(InputValidation);
  }

  async run() {
    const purchaseTickets = this.#createLottoArrays();
  }

  async #createLottoArrays() {
    const lottoPrice = await this.#inputView.readLottoPrice();
    this.#inputValidation.isNumber(lottoPrice);
    const lottoTickets = Purchase.makeTicket(lottoPrice);
    this.#outputView.printLottoTickets(lottoTickets);
    return lottoTickets;
  }
}
