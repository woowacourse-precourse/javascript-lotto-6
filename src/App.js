import { View } from './LottoView.js';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.view = new View();
  }
  async play() {
    try {
      const lottoAmount = await this.view.getLottoPerchaseAmount();
      let model = new Lotto(lottoAmount);

      model.validateLottoAmount();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
