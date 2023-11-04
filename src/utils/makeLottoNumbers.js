import { Random } from '@woowacourse/mission-utils';
import { printMessage } from './printMessage';

const makeLottoNumbers = perchaseQuentity => {
  let count = 0;
  while (count < perchaseQuentity) {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    printMessage(lottoNumbers.sort((a, b) => a - b));
    count += 1;
  }
};

export default makeLottoNumbers;
