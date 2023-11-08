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

  async buyAndIssueLottos() {
    await this.lottoStore.setLottoStore();
    this.lottoCenter = new LottoCenter(this.lottoStore.publishLottos());
    this.lottoCenter.tryPrintAllLottoNumbers();
  }

  async playLottoGame() {
    await this.buyAndIssueLottos();
    
    await this.lottoGameHost.setLottoWinningNumbers();
  }
}

export default LottoGame;