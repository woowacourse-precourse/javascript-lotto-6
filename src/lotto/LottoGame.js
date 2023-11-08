import LottoCenter from './LottoCenter.js';
import LottoGameHost from './LottoGameHost.js';
import LottoStore from './LottoStore.js';

class LottoGame {
  lottoStore = null;
  lottoGameHost = null;
  lottoCenter = null;

  constructor() {
    this.lottoStore = new LottoStore();
    this.lottoGameHost = new LottoGameHost();
  }

  async playLottoGame() {
  
  }
}

export default LottoGame;