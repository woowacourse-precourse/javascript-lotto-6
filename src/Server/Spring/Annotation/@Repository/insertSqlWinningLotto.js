import database from '../../../DB/database.js';
import CONSTANTS from '../../../../Util/Constants.js';

const insertSqlWinningLotto = (winningLotto) => {
  database.set(CONSTANTS.winningLottoColumnName, winningLotto);
};

export default insertSqlWinningLotto;
