export default class LottoController {
  constructor({ model, inputView, outputView }) {
    this.model = model;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    const purchaseAmount = await this.inputView.getPurchaseAmount();

    this.model.settingLottoValue(purchaseAmount);
    const purchaseCount = this.model.getPurchaseCount();
    const lottoArray = this.model.getLottoArray();
    this.outputView.printPurchaseResult(purchaseCount, lottoArray);

    const winningNumber = await this.inputView.getWinningNumber();
    const bonusNumber = await this.inputView.getBonusNumber();
    console.log(winningNumber, bonusNumber);
    this.model.settingWinningValue(winningNumber, bonusNumber);

    const { winningStatistics, roundedProfit } =
      await this.model.getWinningStatistics();
    this.outputView.printWinningStatistics(winningStatistics, roundedProfit);
  }
}
