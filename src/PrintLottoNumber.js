import { MissionUtils } from '@woowacourse/mission-utils';
import MakeLottoNumber from './MakeLottoNumber.js';
import SortingLottoNumber from './SortingLottoNumber.js';

const PrintLottoNumber = (number) => {
  const LOTTO_NUMBER = [];

  for (let count = 0; count < number; count++) {
    const LOTTO_ARRAY = MakeLottoNumber();
    const SORTED_ARRAY = SortingLottoNumber(LOTTO_ARRAY);

    LOTTO_NUMBER.push(SORTED_ARRAY);

    MissionUtils.Console.print(`[${SORTED_ARRAY.join(', ')}]`);
  }

  return LOTTO_NUMBER;
};

export default PrintLottoNumber;
