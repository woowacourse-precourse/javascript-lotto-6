import { MissionUtils } from '@woowacourse/mission-utils';
import { Lotto } from '../lotto/index.js';
import { inputMethod } from './index.js';
import { uiConstants, magicNumber } from '../constants/index.js';

function createRandomNumber() {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
    magicNumber.START_RANGE,
    magicNumber.END_RANGE,
    magicNumber.LOTTO_NUMBER_CNT,
  );
  return lottoNumber.sort((a, b) => a - b);
}

export function createLotto(cnt) {
  const lotto = [];
  for (let idx = 0; idx < cnt; idx += 1) {
    lotto.push(createRandomNumber());
  }
}

createLotto(3);
