import RandomLottoManage from '../child/random_lotto_manage.js';
import InputNumManage from '../child/input_num_manage.js';
import LottoResultManage from '../child/lotto_result_manage.js';

class GameManage {
  async gameManage() {
    const RANDOM_LOTTO_MANAGE = new RandomLottoManage();
    await RANDOM_LOTTO_MANAGE.startLotto();
    const INPUT_NUM_MANAGE = new InputNumManage();
    await INPUT_NUM_MANAGE.startInputNum();
    const RANDOM_LOTTO = RANDOM_LOTTO_MANAGE.randomLotto;
    const WINNING_NUM = INPUT_NUM_MANAGE.winningNum;
    const BONUS_NUM = INPUT_NUM_MANAGE.bonusNum;
    const LOTTO_RESULT = new LottoResultManage(RANDOM_LOTTO, WINNING_NUM, BONUS_NUM);
    LOTTO_RESULT.calculateLottoResult();
  }
}

export default GameManage;
