import { Random } from '@woowacourse/mission-utils';

export default function GenerateLotto(count) {
  const lottoNumbers = [];
  for (let i = 0; i < count; i++) {
    const uniqueNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    uniqueNumbers.sort((a, b) => a - b);
    lottoNumbers.push(uniqueNumbers);
  }
  return lottoNumbers;
}
