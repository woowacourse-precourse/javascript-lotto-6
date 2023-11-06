import LottoGameController from '../controller/LottoGameController.js';
import LottoResult from '../model/LottoResult.js';
import LottoTickets from '../model/LottoTickets.js';
import RandomNumberStrategy from '../model/strategies/RandomNumberStrategy.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoGameFactory {
  createLottoGame() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const lottoResult = new LottoResult();
    const lottoTickets = new LottoTickets();
    const randomNumberGeneration = new RandomNumberStrategy();

    return new LottoGameController({
      inputView,
      outputView,
      lottoResult,
      lottoTickets,
      randomNumberGeneration,
    });
  }
}

export default LottoGameFactory;
