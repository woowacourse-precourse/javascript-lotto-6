import ERROR_CODE from '../error/errorCode';
import { pickSixNumber } from '../libararyFeatures/MissionUtilHandler';

export default async function createPurchaseData(lottoCount, lottos) {
  try {
    const singleLotto = pickSixNumber();
    const lottoList = lottos.push(singleLotto);
    const isNotPurchased = lottoList.length !== lottoCount;

    if (isNotPurchased) {
      return createPurchaseData(lottoCount, lottoList);
    }

    return lottoList;
  } catch (error) {
    throw new Error(`${ERROR_CODE.createPurchaseData}`);
  }
}
