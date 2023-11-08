import { Random } from '@woowacourse/mission-utils';
import { LOTTOSET } from '../../Constant/SETTING.js';

export default function randomLotto() {
  const randomNumbers = [];
  while (randomNumbers.length < LOTTOSET.numCnt) {
    const number = Random.pickNumberInRange(LOTTOSET.startNum, LOTTOSET.endNum);
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }

  return randomNumbers;
}
