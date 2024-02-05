import LottoTicketGenerator from './LottoTicketGenerator.js';
import LottoPlayer from './LottoPlayer.js';
import LottoMachine from './LottoMachine.js';

class DongHangLottery {
  async play() {
    const player = new LottoPlayer();
    await player.setPurchaseAmount();
    player.printUserPurchaseLottoAmount();

  }
}

export default DongHangLottery;
