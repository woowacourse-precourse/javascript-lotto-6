import { GameController } from "./controllers/GameController.js";

class App {
  async play() {
    const TIKET = await GameController.getLottoTiket();
    const LOTTO_LIST = await GameController.getLottoList(TIKET);
    const LOTTERY_NUMBERS = await GameController.getLottoWinningNumbers();
    const BONUS_NUMBER = await GameController.getBonusNumber(LOTTERY_NUMBERS)
    GameController.lottoResults(TIKET, LOTTO_LIST, LOTTERY_NUMBERS, BONUS_NUMBER);
  }
}

export default App;
