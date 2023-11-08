import RandomLottoManage from '../child/random_lotto_manage.js';
import WinningLottoManage from '../child/winning_lotto_manage.js';

class GameManage {
  async gameManage() {
    const RANDOM_LOTTO_MANAGE = new RandomLottoManage();
    await RANDOM_LOTTO_MANAGE.inputPurchaseAmount();
    const RANDOM_LOTTO = RANDOM_LOTTO_MANAGE.randomLotto;
    const WINNING_LOTTO_MANAGE = new WinningLottoManage(RANDOM_LOTTO);
    await WINNING_LOTTO_MANAGE.inputWinningNum();
  }
}

export default GameManage;
