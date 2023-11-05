import Bonus from '../../VO/Bonus.js';
import insertSqlBonusLotto from '../@Repository/insertSqlBonusLotto.js';
import selectSqlWinningLotto from '../@Repository/selectSqlWinningLotto.js';

const insertBonusLotto = (inputBonusLotto) => {
  const winningLotto = selectSqlWinningLotto();
  const bonusLottoVO = new Bonus(inputBonusLotto, winningLotto);
  insertSqlBonusLotto(bonusLottoVO.bonus);
};

export default insertBonusLotto;
