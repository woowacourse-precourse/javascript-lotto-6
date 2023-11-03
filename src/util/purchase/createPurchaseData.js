import ERROR_CODE from '../error/errorCode';
import { pickSixNumber } from '../libararyFeatures/MissionUtilHandler';
import acendingSortList from '../parse/acendingSortList';
import { checkLottoDuplicate } from '../validate/checkHasDuplicate';

export default async function createPurchaseData(lottoCount, lottos) {
  try {
    const singleLotto = pickSixNumber();
    const sortedLotto = acendingSortList(singleLotto);
    const lottoList = [...lottos];
    const isLottoDuplicated = checkLottoDuplicate(sortedLotto, lottoList);

    if (isLottoDuplicated) {
      return createPurchaseData(lottoCount, lottoList);
    }

    lottoList.push(sortedLotto);
    const isNotCompleted = lottoList.length !== lottoCount;

    if (isNotCompleted) {
      return createPurchaseData(lottoCount, lottoList);
    }

    return lottoList;
  } catch (error) {
    throw new Error(`${ERROR_CODE.createPurchaseData}`);
  }
}
