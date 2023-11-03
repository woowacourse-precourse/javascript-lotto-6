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
    const ticketPrice = await InputView.getLottoNumbers();
    OutputView.printQuantity(ticketPrice);

    this.#userLottoModel.generateLottoTicket(ticketPrice);
    const lottoTickets = this.#userLottoModel.getLottoTickets()
    OutputView.printLottoTickets(lottoTickets);

    const winningNumbers = await InputView.getWinningNumbers();

    const lotto = new Lotto(winningNumbers);

    const bonusNumbers = await InputView.getBonusNumbers();

    const result = lotto.countMatches(lottoTickets, winningNumbers, bonusNumbers, ticketPrice);
    
    OutputView.printResultTitle();

    OutputView.printSeparator();

    OutputView.formatResults(result);
  }
}

export default LottoController;