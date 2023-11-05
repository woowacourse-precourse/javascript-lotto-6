import { Console } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';

export const getLottoResult = (lottoArray, winningLotto) => {
  Console.print(inputMessage.LOTTO_STATISTIC);

  const winningCount = [];
  lottoArray.forEach(lotto =>
    winningCount.push(lotto.compareLotto(winningLotto)),
  );

  return winningCount;
};
