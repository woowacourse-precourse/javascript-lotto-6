import InputHandler from './InputHandler.js';
import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';

class App {
  #inputHandler;
  #winningNumbers;
  #bonusNumber;
  #lottoTickets;
  #lottoResult;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#lottoResult = new LottoResult();
  }

  async play() {
    const userAmount = await this.#inputHandler.inputAmount();
    const lottoGenerator = new LottoGenerator(userAmount);
    this.#lottoTickets = lottoGenerator.getLottoTickets();
    this.#winningNumbers = await this.#inputHandler.inputWinningNumbers();
    this.#bonusNumber = await this.#inputHandler.inputBonusNumber();

    this.#lottoResult.checkWinningNumbers(
      this.#lottoTickets,
      this.#winningNumbers,
      this.#bonusNumber
    );
  }
}

export default App;
