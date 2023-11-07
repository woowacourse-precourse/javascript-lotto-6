import { Random } from '@woowacourse/mission-utils';

class RandomNumber {
  lottoNumber;
  static createRandomLottoNumber(purhcaseAmount) {
    let count = 1;
    const lottoNumberArray = [];
    while(count <= purhcaseAmount) {
      this.lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumberArray.push(this.lottoNumber);
      count+=1;
    }
    return lottoNumberArray;
  }
}

export default RandomNumber;