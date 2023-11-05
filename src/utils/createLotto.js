import { Console } from '@woowacourse/mission-utils';
import { createNumber } from './createNumber';
import Lotto from '../Lotto';

export const createLotto = lottoCount => {
  Console.print(`\n${lottoCount}개를 구매했습니다.`);

  const lottoArray = [];

  for (let i = 0; i < lottoCount; i += 1) {
    const numberArray = createNumber();

    const lotto = new Lotto(numberArray);
    lottoArray.push(lotto);
    lotto.printLottoNumbers();
  }
  return lottoArray;
};
