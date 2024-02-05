import LottoTicketGenerator from './LottoTicketGenerator.js';
import LottoPlayer from './LottoPlayer.js';
import LottoMachine from './LottoMachine.js';

class DongHangLottery {
  async play() {
    const player = new LottoPlayer();
    const lottoMachine = new LottoMachine();
    await player.setPurchaseAmount();
    player.printUserPurchaseLottoAmount();
    await lottoMachine.setWinningNumber();
    await lottoMachine.setPlusNumber();

    // 사용자의 워하는 로또 구매 개수를 입력받아 유효한 입력일때 구매한 개수까지 출력하는 기능까지 완료
  }
}

export default DongHangLottery;
