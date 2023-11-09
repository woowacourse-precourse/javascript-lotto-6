import { Random } from '@woowacourse/mission-utils';
import Output from '../view/Output';
import Init from '../constant/Init';

class RandomNumber {
  lottoNumber;

  static createRandomLottoNumber(purhcaseAmount) {
    let count = 1;
    const lottoNumberArray = [];
    while (count <= purhcaseAmount) {
      this.lottoNumber = Random.pickUniqueNumbersInRange(
        Init.minLottoRange,
        Init.maxLottoRange,
        Init.lottoLength,
      );
      Output.printRandomLottoNumber(this.lottoNumber);
      lottoNumberArray.push(this.lottoNumber);
      count += 1;
    }
    return lottoNumberArray;
  }
}

export default RandomNumber;
