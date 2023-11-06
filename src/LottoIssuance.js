import { Random } from '@woowacourse/mission-utils';

export default function LottoIssuance(lotto) {
  const lottoIssuanceList = [];

  for (let i = 0; i < lotto; i++) {
    lottoIssuanceList.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  return lottoIssuanceList;
}
