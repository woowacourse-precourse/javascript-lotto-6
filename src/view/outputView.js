import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/messages.js';
import { PLACE } from '../constants/numbers.js';

const outputView = {
  lottos(lottos) {
    // this.newLine();
    Console.print(`${lottos.length}${OUTPUT_MSG.LOTTOS}`);
    for (let i = 0; i < lottos.length; i += 1) {
      const lotto = `[${lottos[i].getLottoNumbers().join(', ')}]`;
      Console.print(lotto);
    }
  },

  lottoResult(prize) {
    Console.print(OUTPUT_MSG.RESULT);
    Console.print(
      `${OUTPUT_MSG.PRIZE.FIFTH[0]}${prize[PLACE.FIFTH]}${
        OUTPUT_MSG.PRIZE.FIFTH[1]
      }`,
    );
    Console.print(
      `${OUTPUT_MSG.PRIZE.FOURTH[0]}${prize[PLACE.FOURTH]}${
        OUTPUT_MSG.PRIZE.FOURTH[1]
      }`,
    );
    Console.print(
      `${OUTPUT_MSG.PRIZE.THIRD[0]}${prize[PLACE.THIRD]}${
        OUTPUT_MSG.PRIZE.THIRD[1]
      }`,
    );
    Console.print(
      `${OUTPUT_MSG.PRIZE.SECOND[0]}${prize[PLACE.SECOND]}${
        OUTPUT_MSG.PRIZE.SECOND[1]
      }`,
    );
    Console.print(
      `${OUTPUT_MSG.PRIZE.FIRST[0]}${prize[PLACE.FIRST]}${
        OUTPUT_MSG.PRIZE.FIRST[1]
      }`,
    );
  },

  rateOfReturns(rate) {
    Console.print(
      `${OUTPUT_MSG.RATE_OF_RETURNS[0]}${rate}${OUTPUT_MSG.RATE_OF_RETURNS[1]}`,
    );
  },

  newLine() {
    Console.print(OUTPUT_MSG.NEW_LINE);
  },

  error(error) {
    Console.print(error.message);
  },
};

export default outputView;
