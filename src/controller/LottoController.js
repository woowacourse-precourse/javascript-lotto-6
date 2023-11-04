import MESSAGES from "../constants/messages";

class LottoController {
  constructor(inputView, outputView, lottoModel) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.lottoModel = lottoModel;
  }

  async play() {
    await this.init();
    await this.setNumbers();
    this.printResult();
  }

  async init() {
    await this.setPriceInfo();
    const totalCount = this.lottoModel.getTotalCount();

    this.lottoModel.setLottos();
    const lottosData = this.lottoModel.getLottosData();

    this.outputView.printLottos(totalCount, lottosData);
  }

  async setPriceInfo() {
    const totalPrice = await this.inputView.read(MESSAGES.read.buyPrice);
    try {
      this.lottoModel.setPriceInfo(totalPrice);
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
      this.lottoModel.setTargetNumbers(targetNumbers.split(","));
    } catch ({ message }) {
      this.outputView.print(message);
      await this.setTargetNumbers();
    }
  }

  async setBonusNumber() {
    const bonusNumber = this.inputView.read(MESSAGES.read.bonusNumber);
    try {
      this.lottoModel.setBonusNumber(bonusNumber);
    } catch ({ message }) {
      this.outputView.print(message);
      await this.setBonusNumber();
    }
  }

  printResult() {
    this.lottoModel.judgeResult();
    const result = this.lottoModel.getResult();

    this.lottoModel.setIncome();
    const incomeData = this.lottoModel.getIncomeData();

    this.outputView.printResult(incomeData, result);
  }
}

export default LottoController;
