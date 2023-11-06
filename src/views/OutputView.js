import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';
import {
  STRING_1TH,
  STRING_2ND,
  STRING_3RD,
  STRING_4TH,
  STRING_5TH,
} from '../constants/strings.js';

const OutputView = {
  printPublishCount(count) {
    Console.print(OUTPUT_MESSAGE.publishCount(count));
  },

  printLine() {
    Console.print('');
  },

  printLottos(lottos) {
    lottos.forEach(lotto => {
      Console.print(OUTPUT_MESSAGE.lotto(lotto.numbers));
    });
  },

  printWinningDivision() {
    Console.print(OUTPUT_MESSAGE.winningDivisionText);
  },

  printScore(score) {
    Console.print(OUTPUT_MESSAGE.prize5th(score[STRING_5TH]));
    Console.print(OUTPUT_MESSAGE.prize4th(score[STRING_4TH]));
    Console.print(OUTPUT_MESSAGE.prize3rd(score[STRING_3RD]));
    Console.print(OUTPUT_MESSAGE.prize2nd(score[STRING_2ND]));
    Console.print(OUTPUT_MESSAGE.prize1st(score[STRING_1TH]));
  },

  printRate(rate) {
    Console.print(OUTPUT_MESSAGE.rate(rate));
  },
};

export default OutputView;
