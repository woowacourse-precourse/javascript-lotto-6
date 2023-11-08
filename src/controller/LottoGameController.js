import { GAME_MESSAGES } from "../utils/message";

class LottoGame {
  constructor(createModel, input, output, myLotto, result) {
    this.CreateModel = createModel;
    this.Input = input;
    this.Output = output;
    this.MyLotto = myLotto;
    this.Result = result;
  }

  async lottoGamePlay() {
    const purchase = await this.getLottoPurchaseAmount();
    this.generateLottoTicket(purchase);
    const lottoWinngNumbers = await this.getLottoWinningNumbers();
    const lottoBonusNumber = await this.getLottoBonusNumber(lottoWinngNumbers);
    this.getLottoResult(lottoWinngNumbers, lottoBonusNumber);
    this.lottoResultPrint(purchase);
  }

  lottoResultPrint(purchase) {
    const profitMargin = this.Result.getProfitMargin(purchase.getAmount());
    this.Output.printWinngStatistics(this.Result, profitMargin);
  }

  getLottoResult(winngNumbers, bonusNumber) {
    this.Result.getMatchingNumbersCount(
      winngNumbers.getLotto(),
      bonusNumber.getBonus(),
      this.MyLotto.getMyLottoList(),
    );
  }

  async getLottoBonusNumber(lottoWinngNumbers) {
    const bonusNumber = await this.Input.readLottoBonusNumberInput();
    this.Output.printResult(bonusNumber);
    const bonusNumberArray = this.stringToNumberArray(bonusNumber);
    return this.setLottoBonusNumber(bonusNumberArray, lottoWinngNumbers);
  }

  setLottoBonusNumber(bonusNumber, lottoWinngNumbers) {
    try {
      return this.CreateModel.createBonusModel(bonusNumber, lottoWinngNumbers);
    } catch ({ message }) {
      this.Output.printResult(message);
      this.getLottoBonusNumber();
      return null;
    }
  }

  async getLottoWinningNumbers() {
    const winngNumbers = await this.Input.readLottoWinningNumbersInput();
    this.Output.printResult(winngNumbers);
    const winngNumbersArray = this.stringToNumberArray(winngNumbers);
    return this.setLottoWinngNumbers(winngNumbersArray);
  }

  setLottoWinngNumbers(winngNumbers) {
    try {
      return this.CreateModel.createLottoModel(winngNumbers);
    } catch ({ message }) {
      this.Output.printResult(message);
      return this.getLottoWinningNumbers();
    }
  }

  stringToNumberArray(string) {
    return string.split(",").map(Number);
  }

  async getLottoPurchaseAmount() {
    const purchaseAmount = await this.Input.readLottoPurchaseAmountInput();
    this.Output.printResult(purchaseAmount);
    return this.setLottoPurchaseAmount(purchaseAmount);
  }

  async setLottoPurchaseAmount(purchaseAmount) {
    try {
      const returnResult = this.CreateModel.createPurchaseModel(Number(purchaseAmount));
      return returnResult;
    } catch ({ message }) {
      this.Output.printResult(message);
      return this.getLottoPurchaseAmount();
    }
  }

  generateLottoTicket(purchase) {
    const lottoTicketCount = purchase.getLottoTicketCount();
    this.Output.printResultNewLine(lottoTicketCount + GAME_MESSAGES.lottoTicketCount);
    this.MyLotto.buyLottoTicket(lottoTicketCount);
  }
}

export default LottoGame;
