import LottoTicketGenerator from './LottoTicketGenerator.js';
import LottoPlayer from './LottoPlayer.js';
import LottoMachine from './LottoMachine.js';

class DongHangLottery {
  async play() {
    const player = new LottoPlayer();
    const lottoMachine = new LottoMachine();
    await player.setPurchaseAmount();
    player.printUserPurchaseLottoAmount();
    player.userByLottoList();
    player.printUserLottoList();
    await lottoMachine.setWinningNumber();
    await lottoMachine.setPlusNumber();

    // 보유한 로또 검증
    const userLottoList = player.getUserLottoList();
    const winnigRecordResult = lottoMachine.checkLottoResult(userLottoList);
    player.setWinnigLottoResult(winnigRecordResult);
    player.calculRateOfReturn();
    player.printWinnigReulst()
    player.printRavenue()
  }
}

export default DongHangLottery;
