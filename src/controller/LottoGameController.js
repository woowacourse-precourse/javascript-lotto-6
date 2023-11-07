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
      // return null;
    }
  }

  // 로또 발행하기
  generateLottoTicket(purchase) {
    const lottoTicketCount = purchase.getLottoTicketCount();
    this.Output.printResult(lottoTicketCount + GAME_MESSAGES.lottoTicketCount);

    this.MyLotto.buyLottoTicket(lottoTicketCount);
    // Console.print(this.MyLotto.getMyLottoList());
  }
}

export default LottoGame;
