import LottoModel from "../model/LottoModel";
import LottoView from "../view/LottoView";

class LottoController {
  constructor() {
    this.model = new LottoModel();
    this.view = new LottoView();
  }

  async play() {
    const purchaseAmount = await this.model.inputAmount();

    if (purchaseAmount % 1000 !== 0) {
      this.view.showError("1,000원 단위로 입력하세요.");
      return;
    }

    const ticketCount = purchaseAmount / 1000;
    this.view.print(`\n${ticketCount}개를 구매했습니다.`);

    const lottoTickets = this.model.generateLotto(ticketCount);
    const { winningNumbers, bonusNumber } =
      await this.model.inputWinningNumbers();

    const winning = this.model.checkLottoTickets(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    this.view.showWinning(winning, ticketCount);
  }
}

export default LottoController;
