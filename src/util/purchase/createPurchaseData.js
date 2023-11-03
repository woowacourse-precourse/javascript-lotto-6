import ERROR_CODE from '../error/errorCode.js';
import { pickSixNumber } from '../libararyFeatures/MissionUtilHandler.js';
import acendingSortList from '../parse/acendingSortList.js';
import { checkLottoDuplicate } from '../validate/checkHasDuplicate.js';

export default async function createPurchaseData(lottoCount, lottos) {
  try {
    const singleLotto = pickSixNumber();
    const sortedLotto = acendingSortList(singleLotto);
    const lottoList = [...lottos];
    const isFirstTry = lottoList.length === 0;

    const isLottoDuplicated = isFirstTry ? false : checkLottoDuplicate(sortedLotto, lottoList);

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
