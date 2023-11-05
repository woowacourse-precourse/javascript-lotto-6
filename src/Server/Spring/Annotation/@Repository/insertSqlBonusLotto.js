import database from '../../../DB/database.js';
import CONSTANTS from '../../../../Util/Constants.js';

const insertSqlBonusLotto = (bonusLotto) => {
  database.set(CONSTANTS.bonusLottoColumnName, bonusLotto);
};

export default insertSqlBonusLotto;
