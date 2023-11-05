import InputView from './InputView';
import LottoTickets from './LottoTickets';
import OutputView from './OutputView';

class LottoGame {
  #purchaseAmount;

  async gameStart() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
    const lottoCount = this.#purchaseAmount / 1000;
    const lottoList = new LottoTickets(lottoCount);
    OutputView.printLottoTickets(lottoList.tickets);
  }
}

export default LottoGame;
