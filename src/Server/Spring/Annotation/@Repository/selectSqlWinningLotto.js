/* eslint-disable import/extensions */
import database from '../../../DB/database.js';

const selectSqlWinningLotto = () => {
  database.get('winningLotto');
};

export default selectSqlWinningLotto;
