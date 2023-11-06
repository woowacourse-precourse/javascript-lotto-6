import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/message.js';

export const printErrorMessage = (errorMessage) => {
  Console.print(errorMessage);
};

export const printBuyLottery = (amount) => {
  Console.print(OUTPUT_MESSAGE.OUTPUT_BUY_LOTTERY(amount));
};

export const printLottery = (lotto) => {
  Console.print(`[${lotto.toString().replaceAll(',', ', ')}]`);
};

export const printBeforeResult = () => {
  Console.print(OUTPUT_MESSAGE.OUTPUT_RESULT);
  Console.print(OUTPUT_MESSAGE.OUTPUT_DIVIDER);
};

export const printWinningStatus = (rewardCount) => {
  Console.print(
    `${
      OUTPUT_MESSAGE.OUTPUT_THREE_MATCH
    } - ${OUTPUT_MESSAGE.OUTPUT_MATCH_AMOUNT(rewardCount['3'])}`,
  );
  Console.print(
    `${OUTPUT_MESSAGE.OUTPUT_FOUR_MATCH} - ${OUTPUT_MESSAGE.OUTPUT_MATCH_AMOUNT(
      rewardCount['4'],
    )}`,
  );
  Console.print(
    `${OUTPUT_MESSAGE.OUTPUT_FIVE_MATCH} - ${OUTPUT_MESSAGE.OUTPUT_MATCH_AMOUNT(
      rewardCount['5'],
    )}`,
  );
  Console.print(
    `${
      OUTPUT_MESSAGE.OUTPUT_FIVE_AND_BONUS_MATCH
    } - ${OUTPUT_MESSAGE.OUTPUT_MATCH_AMOUNT(rewardCount['5b'])}`,
  );
  Console.print(
    `${OUTPUT_MESSAGE.OUTPUT_SIX_MATCH} - ${OUTPUT_MESSAGE.OUTPUT_MATCH_AMOUNT(
      rewardCount['6'],
    )}`,
  );
};

export const printMyBenefit = (percetage) => {
  Console.print(OUTPUT_MESSAGE.OUTPUT_TOTAL_BENEFIT(percetage));
};
