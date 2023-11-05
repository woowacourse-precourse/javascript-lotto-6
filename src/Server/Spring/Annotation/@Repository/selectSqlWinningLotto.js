import database from '../../../DB/database.js';
import CONSTANTS from '../../../../Util/Constants.js';

const selectSqlWinningLotto = () => {
  return database.get(CONSTANTS.winningLottoColumnName);
};

export default selectSqlWinningLotto;
