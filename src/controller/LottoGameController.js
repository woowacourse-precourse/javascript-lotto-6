import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message";

class LottoGame {
  constructor(createModel, input, output, myLotto) {
    this.CreateModel = createModel;
    this.Input = input;
    this.Output = output;
    this.MyLotto = myLotto;
  }

  // 로또 게임
  async lottoGamePlay() {
    const purchase = await this.getLottoPurchaseAmount();
    this.generateLottoTicket(purchase);
    const lottoWinngNumbers = await this.getLottoWinningNumbers();
    await this.getLottoBonusNumber(lottoWinngNumbers);
  }

  // 보너스 번호 입력 받기
  async getLottoBonusNumber(lottoWinngNumbers) {
    const bonusNumber = await this.Input.readLottoBonusNumberInput();
    this.Output.printResult(bonusNumber);
    const bonusNumberArray = this.stringToNumberArray(bonusNumber);
    return this.setLottoBonusNumber(bonusNumberArray, lottoWinngNumbers);
  }

  // 보너스 번호 저장
  setLottoBonusNumber(bonusNumber, lottoWinngNumbers) {
    try {
      return this.CreateModel.createBonusModel(bonusNumber, lottoWinngNumbers);
    } catch ({ message }) {
      this.Output.printResult(message);
      // this.getLottoBonusNumber();
      return null;
    }
  }

  // 당첨 번호 입력 받기
  async getLottoWinningNumbers() {
    const winngNumbers = await this.Input.readLottoWinningNumbersInput();
    this.Output.printResult(winngNumbers);
    const winngNumbersArray = this.stringToNumberArray(winngNumbers);
    return this.setLottoWinngNumbers(winngNumbersArray);
  }

  // 당첨 번호 저장
  setLottoWinngNumbers(winngNumbers) {
    try {
      return this.CreateModel.createLottoModel(winngNumbers);
    } catch ({ message }) {
      this.Output.printResult(message);
      this.getLottoWinningNumbers();
      return null;
    }
  }

  // 문자열 숫자 배열로
  stringToNumberArray(string) {
    return string.split(",").map(Number);
  }

  // 로또 구매 금액 입력 받기
  async getLottoPurchaseAmount() {
    const purchaseAmount = await this.Input.readLottoPurchaseAmountInput();
    this.Output.printResult(purchaseAmount);
    return this.setLottoPurchaseAmount(purchaseAmount);
  }

  // 로또 구매 금액 저장
  setLottoPurchaseAmount(purchaseAmount) {
    try {
      return this.CreateModel.createPurchaseModel(Number(purchaseAmount));
    } catch ({ message }) {
      this.Output.printResult(message);
      this.getLottoPurchaseAmount();
      return null;
    }
  }

  // 로또 발행하기
  generateLottoTicket(purchase) {
    const lottoTicketCount = purchase.getLottoTicketCount();
    this.Output.printResult(lottoTicketCount + GAME_MESSAGES.lottoTicketCount);
    this.MyLotto.buyLottoTicket(lottoTicketCount);
  }
}

export default LottoGame;
