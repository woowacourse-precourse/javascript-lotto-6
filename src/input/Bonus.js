import { checkbonus } from '../Exception/CheckBonus.js';
import { checkduplication } from '../Exception/Checkduplication.js';
import { bonusinput } from './BonusInput.js';
import { Console } from '@woowacourse/mission-utils';

// 기능3의 보너스 번호 입력 조건
export async function bonus(lottonum) {
  const input = lottonum;
  try {
    const plus = await bonusinput();
    checkbonus(plus);
    checkduplication(input, plus);
    input['bonus'] = parseInt(plus);
    return input;
  } catch (error) {
    Console.print(error.message);
    return bonus(input);
  }
}
