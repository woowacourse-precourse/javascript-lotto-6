import { Random } from '@woowacourse/mission-utils';
import { LOTTO_RANGE } from '../constants/constant';

class LottoNumbers {
  #lottoNumbers

  constructor(){
    this.#lottoNumbers = new Map();
  }

  #generateRandomNumbers(){
    const { start, end, range } = LOTTO_RANGE;
    return Random.pickUniqueNumbersInRange(start, end, range);
  }

  #sortLottoArr(numArr){
    numArr.sort((a,b)=> a-b);
  }

  makeLottoListMap(num){
    for(let turn = 1; turn <= num; turn += 1){
      const lottoArr = this.#generateRandomNumbers();
      this.#sortLottoArr(lottoArr);
      this.#lottoNumbers.set(turn, lottoArr);
    }
  }

  getLottoNumbers(){
    return this.#lottoNumbers;
  }
}

export default LottoNumbers;