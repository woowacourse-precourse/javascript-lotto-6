/* eslint-disable import/extensions */
import Lotto from '../../VO/Lotto.js';
import insertSqlWinningLotto from '../@Repository/insertSqlWinningLotto.js';

const insertWinningLotto = inputwinningLotto => {
  const winningLotto = inputwinningLotto.split(',').map(lottoNumber => Number(lottoNumber));
  const winningLottoVO = new Lotto(winningLotto);
  insertSqlWinningLotto(winningLottoVO.numbers);
};

export default insertWinningLotto;
