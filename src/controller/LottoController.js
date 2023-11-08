export default class LottoController {
  constructor({ model, inputView, outputView }) {
    this.model = model;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    const purchaseAmount = await this.inputView.getPurchaseAmount();
    this.model.setPurchaseAmount(purchaseAmount);
    this.model.setPurchaseCount();
    const purchaseCount = this.model.getPurchaseCount();
    this.model.setLottoArray();
    const lottoArray = this.model.getLottoArray();
    this.outputView.printPurchaseResult(purchaseCount, lottoArray);
    const winningNumber = await this.inputView.getWinningNumber();
    this.model.setWinningNumber(winningNumber);
    const bonusNumber = await this.inputView.getBonusNumber();
    this.model.setBonusNumber(bonusNumber);
    const winningStatistics = this.model.getWinningStatistic();
    this.outputView.printWinningStatistics(winningStatistics);
  }
}
