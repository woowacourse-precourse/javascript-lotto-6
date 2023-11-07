import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from '../constants/MagicNumber.js';

export default function GenerateLotto(count) {
  const lottoNumbers = [];
  for (let i = 0; i < count; i++) {
    const uniqueNumbers = Random.pickUniqueNumbersInRange(
      MAGIC_NUMBER.lottoNumberMin,
      MAGIC_NUMBER.lottoNumberMax,
      MAGIC_NUMBER.lottoNumberCount
    );
    uniqueNumbers.sort((a, b) => a - b);
    lottoNumbers.push(uniqueNumbers);
  }
  return lottoNumbers;
}
