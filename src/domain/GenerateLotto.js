import { Random } from '@woowacourse/mission-utils';
import { MagicNumber } from '../constants/MagicNumber';

export default function GenerateLotto(count) {
  const lottoNumbers = [];
  for (let i = 0; i < count; i++) {
    const uniqueNumbers = Random.pickUniqueNumbersInRange(
      MagicNumber.lottoNumberMin,
      MagicNumber.lottoNumberMax,
      MagicNumber.lottoNumberCount
    );
    uniqueNumbers.sort((a, b) => a - b);
    lottoNumbers.push(uniqueNumbers);
  }
  return lottoNumbers;
}
