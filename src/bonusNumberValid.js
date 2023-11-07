import verificationBounsNumber from './verificationBonusNumber.js';
import bonusNumber from './bonusNumber.js';
import { MissionUtils } from '@woowacourse/mission-utils';
export default async function bonusNumberValid(number) {
  let result = null;
  while (result === null) {
    try {
      const answer = await bonusNumber('보너스 번호를 입력해 주세요.');
      result = verificationBounsNumber(answer, number);
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }
  return result;
}
