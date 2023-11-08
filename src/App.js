import LottoGame from './domain/LottoGame.js';
import LottoGameService from './service/LottoGameService.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
    this.lottoGameService = new LottoGameService(this.lottoGame);
  }

  async play() {
    await this.lottoGameService.getInputAndGenerateLottoTickets();

    this.lottoGameService.printLottoTickets();

    await this.lottoGameService.userInputAndSetWinningNumbers();

    this.lottoGameService.calculateWinningResult();

    this.lottoGameService.printWinningResult();
  }
}

export default App;
