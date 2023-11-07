import { pickSixNumber } from '../libararyFeatures/MissionUtilHandler.js';
import ascendingSortList from '../parse/ascendingSortList.js';

export default function createPurchaseData(lottoCount, lottos) {
  const singleLotto = pickSixNumber();
  const sortedLotto = ascendingSortList(singleLotto);
  const lottoList = [...lottos];

  lottoList.push(sortedLotto);
  const isNotCompleted = lottoList.length !== lottoCount;

  if (isNotCompleted) {
    return createPurchaseData(lottoCount, lottoList);
  }

  return lottoList;
}
