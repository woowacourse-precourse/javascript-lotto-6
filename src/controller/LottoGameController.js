class LottoGame {
  constructor(createModel, purchase, input, output) {
    this.CreateModel = createModel;
    this.Purchase = purchase;
    this.Input = input;
    this.Output = output;
  }

  // 로또 게임
  async lottoGamePlay() {
    const purchase = await this.getLottoPurchaseAmount();
  }

  // 로또 구매 금액 입력 받기
  async getLottoPurchaseAmount() {
    const purchaseAmount = await this.Input.readLottoPurchaseAmountInput();
    this.Output.printResult(purchaseAmount);
    return this.setLottoPurchaseAmount(purchaseAmount);
  }

  // 로또 구매 금액 저장
  setLottoPurchaseAmount(purchaseAmount) {
    return this.CreateModel.createPurchaseModel(Number(purchaseAmount));
  }
}

export default LottoGame;
