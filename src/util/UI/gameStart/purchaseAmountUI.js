import { PURCHASE_ERROR_CODE } from '../../error/errorCode.js';
import { consoleInput } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function purchaseAmountUI() {
  try {
    const GUIDANCE_TEXT = '구입금액을 입력해 주세요 \n';
    const input = await consoleInput(GUIDANCE_TEXT);
    return input;
  } catch (error) {
    throw new Error(`${PURCHASE_ERROR_CODE.purchaseAmount}`);
  }
}
