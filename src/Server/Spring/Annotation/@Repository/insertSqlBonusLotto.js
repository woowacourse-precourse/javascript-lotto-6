/* eslint-disable import/extensions */
import database from '../../../DB/database.js';

const insertSqlBonusLotto = (bonusLotto) => {
  database.set('bonusLotto', bonusLotto);
};

export default insertSqlBonusLotto;
