import UserInput from './models/UserInput.js';
import LottoDrawing from './controllers/LottoDrawing.js';
import printMessage from './views/Outputs.js';
import WinnerMaker from './controllers/WinnerMaker.js';

class App {
  #userInput;

  #winnerMaker;

  #totalPrice;

  #lottos;

  constructor() {
    this.#userInput = new UserInput();
  }

  async drawLotto() {
    this.#totalPrice = await this.#userInput.getTotalPrice();

    const lottoDrawing = new LottoDrawing(this.#totalPrice);
    const count = lottoDrawing.checkCount();
    this.#lottos = lottoDrawing.makeLottos();

    printMessage.drawing(count, this.#lottos);
  }

  async makeWinner() {
    const winnerNumbers = await this.#userInput.getWinningNumbers();
    const bonusNumber = await this.#userInput.getBonusNumber();

    this.#winnerMaker = new WinnerMaker(
      this.#lottos,
      winnerNumbers,
      bonusNumber,
    );

    const result = this.#winnerMaker.getResult();

    printMessage.results(result, this.#totalPrice);
  }

  async play() {
    await this.drawLotto();
    await this.makeWinner();
  }
}

export default App;
