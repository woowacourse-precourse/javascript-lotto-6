import LottoView from './views/LottoView.js';

class App {
  
  #lottoView
  #user
  #lotto

  constructor() {
    this.#lottoView = new LottoView();
  }

  async play() {
    await this.#lottoView.startLottoGame();
    this.#lottoView.printUserLottoNumbers();
    await this.#lottoView.inputWinningNumbers();

    const bonusNumber = await this.#lottoView.inputBonusNumber();

    this.#lottoView.printLottoResult(bonusNumber);
    this.#lottoView.printEarningsRate();
  }
}

export default App;
