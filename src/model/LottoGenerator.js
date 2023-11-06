import { Random } from '@woowacourse/mission-utils';

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
  return sort(Random.pickUniqueNumbersInRange(1, 45, 6));
};

const sort = eachLottoList => {
  return eachLottoList.sort((a, b) => a - b);
};

export default LottoGenerator;
