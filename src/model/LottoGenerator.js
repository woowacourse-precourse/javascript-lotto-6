import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER_RANGE } from '../util/constant.js';

const LottoGenerator = {
  generateLottoList: amount => {
    let lottoList = new Array(amount);

    Array.from({ length: amount }, () => {
      lottoList.push(randomNumberGenerator());
    });

    return lottoList;
  },
};

const randomNumberGenerator = () => {
  return sort(Random.pickUniqueNumbersInRange(LOTTO_NUMBER_RANGE[0], LOTTO_NUMBER_RANGE[1], 6));
};

const sort = eachLottoList => {
  return eachLottoList.sort((a, b) => a - b);
};

export default LottoGenerator;
