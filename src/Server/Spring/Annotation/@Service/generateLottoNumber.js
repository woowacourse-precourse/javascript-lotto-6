import { Random } from '@woowacourse/mission-utils';

const generateLottoNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort(function (lottoNumberA, lottoNumberB) {
    return lottoNumberA - lottoNumberB;
  });
};

export default generateLottoNumber;
