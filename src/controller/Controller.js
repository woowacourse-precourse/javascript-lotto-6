import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import UserLottoModel from "../domain/UserLottoModel";


class LottoController {
  #userLottoModel;

  constructor() {
    this.#userLottoModel = new UserLottoModel();
  }
  async playGame() {
    const quantity = await InputView.getLottoNumbers();
    OutputView.printQuantity(quantity);

    this.#userLottoModel.generateLottoTicket(quantity);
    const lottoTickets = this.#userLottoModel.getLottoTickets()
    OutputView.printLottoTickets(lottoTickets);

    const winningNumbers = await InputView.getWinningNumbers();

    const bonusNumbers = await InputView.getBonusNumbers();
  }
}

export default LottoController;