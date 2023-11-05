import database from '../../../DB/database.js';
import CONSTANTS from '../../../../Util/Constants.js';

const selectSqlBonusLotto = () => {
  return database.get(CONSTANTS.bonusLottoColumnName);
};

export default selectSqlBonusLotto;
