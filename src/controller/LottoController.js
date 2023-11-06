import InputView from "../view/InputView.js"
import InputValidation from "./InputValidation.js"

export default class LottoController {
  #inputView
  #inputValidation
  constructor() {
    this.#inputView = new InputView()
    this.#inputValidation = Object.create(InputValidation)
  }
  async run() {
    this.#createLottoArrays()
  }

  async #createLottoArrays() {
    const lottoPrice = await this.#inputView.readLottoPrice()
    this.#inputValidation.isNumber(lottoPrice)
  }

}
