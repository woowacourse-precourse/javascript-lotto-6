import { View } from './LottoView.js';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.view = new View();
  }
  async play() {
    try {
      const lottoAmount = await this.validateLottoAmount();
    } catch (error) {
      throw error;
    }
  }

  async validateLottoAmount() {
    while (true) {
      try {
        const lottoAmount = await this.view.getLottoPerchaseAmount();
        const model = new Lotto(lottoAmount);
        model.validateLottoAmount();
        return lottoAmount;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export default App;
