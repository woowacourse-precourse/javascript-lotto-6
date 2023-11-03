import ERROR_CODE from '../error/errorCode';
import { pickSixNumber } from '../libararyFeatures/MissionUtilHandler';
import acendingSortList from '../parse/acendingSortList';

export default async function createPurchaseData(lottoCount, lottos) {
  try {
    const singleLotto = pickSixNumber();
    const sortedLotto = acendingSortList(singleLotto);
    const lottoList = [...lottos];
    lottoList.push(sortedLotto);
    const isNotPurchased = lottoList.length !== lottoCount;

    if (isNotPurchased) {
      return createPurchaseData(lottoCount, lottoList);
    }

    return lottoList;
  } catch (error) {
    throw new Error(`${ERROR_CODE.createPurchaseData}`);
  }
}
