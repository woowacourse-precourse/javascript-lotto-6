import InputView from "../view/InputView";
import OutputView from "../view/OutputView";
import UserLottoModel from "../domain/UserLottoModel";
import Lotto from "../domain/Lotto";


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

    const lotto = new Lotto(winningNumbers);

    const bonusNumbers = await InputView.getBonusNumbers();

    const result = lotto.countMatches(lottoTickets, winningNumbers, bonusNumbers);
    console.log(result)
  }
}

export default LottoController;