/* eslint-disable import/extensions */
import database from '../../../DB/database.js';

const insertSqlWinningLotto = winningLotto => {
  database.set('winningLotto', winningLotto);
};

export default insertSqlWinningLotto;
