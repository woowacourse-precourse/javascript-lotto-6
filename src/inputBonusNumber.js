import { Console } from '@woowacourse/mission-utils';
import validateBonusNumber from 'validates/validateBonusNumber';

export default async function inputBonusNumber(winningNumbers) {
  while (true) {
    try {
      const bonusNumber = Number(await Console.readLineAsync('보너스 번호를 입력하세요\n'));
      return validateBonusNumber(bonusNumber, winningNumbers);
    } catch (error) {
      Console.print(error.message);
    }
  }
}
