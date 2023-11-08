import { Random } from '@woowacourse/mission-utils';
import Lotto from '../model/Lotto.js';
import {
  MAXIMUM_LOTTO_NUMBER,
  MINIMUM_LOTTO_NUMBER,
  LOTTO_LENGTH,
} from '../constants/LottoConstants.js';

const generateLottoNumbers = () =>
  Random.pickUniqueNumbersInRange(
    MINIMUM_LOTTO_NUMBER,
    MAXIMUM_LOTTO_NUMBER,
    LOTTO_LENGTH,
  );

const generateLottos = (neededLotto) => {
  const lottoSet = [];

  let lottoMadded = 0;
  while (lottoMadded !== neededLotto) {
    const newLottoNumbers = generateLottoNumbers();
    lottoSet.push(new Lotto(newLottoNumbers));
    lottoMadded += 1;
  }

  return lottoSet;
};

export default generateLottos;
