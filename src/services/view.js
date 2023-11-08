import { Console } from '@woowacourse/mission-utils';
import { WINNING_RANK_COUNT, WINNING_REQUIRED_COUNT } from '../constants/lotto';
import validationUtils from './utils/validation';
import { WINNING_STATISTICS } from '../constants/message/view';
import PRIZE_AMOUNT_BY_BANK from '../constants/Bank';

const addCommasToNumber = (number) => {
  validationUtils.isIntegerToThrow(number);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const printRank = (matchCount, prizeAmount, rankCount) => {
  Console.print(`${matchCount}개 일치 (${prizeAmount}원) - ${rankCount}개`);
};

const printRankBonus = (matchCount, prizeAmount, rankCount) => {
  Console.print(
    `${matchCount}개 일치, 보너스 볼 일치 (${prizeAmount}원) - ${rankCount}개`,
  );
};

const printExceptSecond = (matchCount, rankKey, rankValue) => {
  const prizeAmount = PRIZE_AMOUNT_BY_BANK[rankKey];
  const prizeAmountComma = addCommasToNumber(prizeAmount);
  printRank(matchCount, prizeAmountComma, rankValue);
};

const printSecondPlace = (rankKey, rankValue) => {
  const prizeAmount = PRIZE_AMOUNT_BY_BANK[rankKey];
  const prizeAmountComma = addCommasToNumber(prizeAmount);
  printRankBonus(
    WINNING_REQUIRED_COUNT.secondPlace,
    prizeAmountComma,
    rankValue,
  );
};

export const consoleInput = async (message) => {
  const input = await Console.readLineAsync(message);
  return input;
};

export const printPurchasedLottoCount = (count) => {
  Console.print(`${count}개를 구매했습니다.`);
};
export const printThreeHyphen = () => {
  Console.print('---');
};

export const printNewLine = () => {
  Console.print('');
};

export const printBuyLotto = (lottos) => {
  lottos.forEach((lotto) => {
    Console.print(
      `[${lotto
        .getNumbers()
        .sort((first, second) => first - second)
        .join(', ')}]`,
    );
  });
};

export const printWinningStatistics = (ranks) => {
  Console.print(`${WINNING_STATISTICS}`);
  printThreeHyphen();
  const { firstPlace, secondPlace, thirdPlace } = WINNING_RANK_COUNT;
  const { fourthPlace, fifthPlace } = WINNING_RANK_COUNT;
  const matchPlaceCount = { ...WINNING_REQUIRED_COUNT };
  printExceptSecond(matchPlaceCount.fifthPlace, fifthPlace, ranks[fifthPlace]);
  printExceptSecond(
    matchPlaceCount.fourthPlace,
    fourthPlace,
    ranks[fourthPlace],
  );
  printExceptSecond(matchPlaceCount.thirdPlace, thirdPlace, ranks[thirdPlace]);
  printSecondPlace(secondPlace, ranks[secondPlace]);
  printExceptSecond(matchPlaceCount.firstPlace, firstPlace, ranks[firstPlace]);
};

export const printProfitRate = (profitRate) => {
  Console.print(`총 수익률은 ${profitRate}%입니다.`);
};
