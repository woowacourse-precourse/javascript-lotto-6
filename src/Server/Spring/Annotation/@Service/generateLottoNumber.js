import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../../../../Util/Constants.js';

const generateLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(
    CONSTANTS.lottoMin,
    CONSTANTS.lottoMax,
    CONSTANTS.lottoCount,
  ).sort(function (lottoNumberA, lottoNumberB) {
    return lottoNumberA - lottoNumberB;
  });
};

export default generateLottoNumber;
