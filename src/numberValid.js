import playerNumber from './playerNumber.js';
import numberVerification from './NumberVerification.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default async function numberValid() {
  let number = null;

  while (number === null) {
    try {
      const playerAnswer = await playerNumber('당첨 번호를 입력해 주세요.');
      number = numberVerification(playerAnswer);
    } catch (error) {
      MissionUtils.Console.print(`${error}`);
    }
  }
  return number;
}
