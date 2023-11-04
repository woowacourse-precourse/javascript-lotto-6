/* eslint-disable import/extensions */
import Bonus from '../../VO/Bonus.js';
import insertSqlBonusLotto from '../@Repository/insertSqlBonusLotto.js';

const insertBonusLotto = (inputBonusLotto) => {
  const bonusLottoVO = new Bonus(inputBonusLotto);
  insertSqlBonusLotto(bonusLottoVO.bonus);
};

export default insertBonusLotto;
