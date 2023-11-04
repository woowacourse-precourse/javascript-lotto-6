import MESSAGES from "../constants/messages";
import SETTINGS from "../constants/settings";
import LottoModel from "../model/LottoModel";

class LottoController {
  #lottoModel;

  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async play() {
    await this.init();
    await this.setNumbers();
    this.printResult();
  }

  async init() {
    await this.setPrice();
    const count = this.#lottoModel.getCount();

    this.#lottoModel.setLottos();
    const lottosData = this.#lottoModel.getLottosData();

    this.outputView.printLottos(count, lottosData);
  }

  async setPrice() {
    const input = await this.inputView.read(MESSAGES.read.buyPrice);
    try {
      this.#lottoModel = new LottoModel(input);
    } catch ({ message }) {
      this.outputView.print(message);
      await this.setPriceInfo();
    }
  }

  async setNumbers() {
    await this.setTargetNumbers();
    await this.setBonusNumber();
  }

  async setTargetNumbers() {
    const targetNumbers = await this.inputView.read(MESSAGES.read.targetNumber);
    try {
      this.#lottoModel.setTargetNumbers(targetNumbers.split(","));
    } catch ({ message }) {
      this.outputView.print(message);
      await this.setTargetNumbers();
    }
  }

  async setBonusNumber() {
    const bonusNumber = this.inputView.read(MESSAGES.read.bonusNumber);
    try {
      this.#lottoModel.setBonusNumber(bonusNumber);
    } catch ({ message }) {
      this.outputView.print(message);
      await this.setBonusNumber();
    }
  }

  printResult() {
    this.#lottoModel.judgeResult();
    const result = this.#lottoModel.getResult();

    this.#lottoModel.setIncome();
    const incomeData = this.#lottoModel.getIncomeData();

    this.outputView.printResult(incomeData, result);
  }
}

export default LottoController;
