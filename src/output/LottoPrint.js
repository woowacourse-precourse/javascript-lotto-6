import { random } from '../Game/Random.js';
import { Console } from '@woowacourse/mission-utils';
// 기능2. 로또 발행

export function lottoprint(buyinput) {
  const randomarray = random(buyinput);
  for (let i = 0; i < randomarray.length; i++) {
    Console.print(
      `[${randomarray[i][0]}, ${randomarray[i][1]}, ${randomarray[i][2]}, ${randomarray[i][3]}, ${randomarray[i][4]}, ${randomarray[i][5]}]`,
    );
  }
  return randomarray;
}
