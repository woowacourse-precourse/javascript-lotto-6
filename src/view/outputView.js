import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages.js';
import { PLACE } from '../constants/numbers.js';

const outputView = {
  lottos(lottos) {
    this.newLine();
    Console.print(`${lottos.length}${OUTPUT.LOTTOS}`);
    for (let i = 0; i < lottos.length; i += 1) {
      const lotto = `[${lottos[i].getLottoNumbers().join(', ')}]`;
      Console.print(lotto);
    }
  },

  lottoResult(prize) {
    Console.print(OUTPUT.RESULT);
    Console.print(
      `${OUTPUT.PRIZE.FIFTH[0]}${prize[PLACE.FIFTH]}${OUTPUT.PRIZE.FIFTH[1]}`,
    );
    Console.print(
      `${OUTPUT.PRIZE.FOURTH[0]}${prize[PLACE.FOURTH]}${
        OUTPUT.PRIZE.FOURTH[1]
      }`,
    );
    Console.print(
      `${OUTPUT.PRIZE.THIRD[0]}${prize[PLACE.THIRD]}${OUTPUT.PRIZE.THIRD[1]}`,
    );
    Console.print(
      `${OUTPUT.PRIZE.SECOND[0]}${prize[PLACE.SECOND]}${
        OUTPUT.PRIZE.SECOND[1]
      }`,
    );
    Console.print(
      `${OUTPUT.PRIZE.FIRST[0]}${prize[PLACE.FIRST]}${OUTPUT.PRIZE.FIRST[1]}`,
    );
  },

  rateOfReturns(rate) {
    Console.print(
      `${OUTPUT.RATE_OF_RETURNS[0]}${rate}${OUTPUT.RATE_OF_RETURNS[1]}`,
    );
  },

  newLine() {
    Console.print(OUTPUT.NEW_LINE);
  },

  error(error) {
    Console.print(error.message);
  },
};

export default outputView;
