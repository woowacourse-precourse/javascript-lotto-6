/* eslint-disable import/extensions */
import database from '../../../DB/database.js';

const selectSqlWinningLotto = () => {
  database.get('bonusLotto');
};

export default selectSqlWinningLotto;
