import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import * as CONSTANTS from "./Constants.js";

export async function getValidPurchaseAmount() {
  let validPurchaseAmount = false;
  let purchaseAmountInput;

  while (!validPurchaseAmount) {
    try {
      purchaseAmountInput = await Console.readLineAsync(
        CONSTANTS.LOTTO_PURCHASE_MESSAGE
      );
      if (isNaN(Number(purchaseAmountInput))) {
        throw new Error(CONSTANTS.ERROR_INVALID_NUMBER);
      }

      if (Number(purchaseAmountInput) % CONSTANTS.LOTTO_TICKET_PRICE !== 0) {
        throw new Error(CONSTANTS.ERROR_NOT_IN_1000_UNITS);
      }

      validPurchaseAmount = true;
    } catch (error) {
      Console.print(error.message);
    }
  }

  return Number(purchaseAmountInput);
}

export function purchaseLottos(count) {
  const lottos = [];
  Console.print(`${count}개를 구매했습니다.`);
  for (let i = 0; i < count; i++) {
    const numbers = Random.pickUniqueNumbersInRange(
      1,
      45,
      CONSTANTS.LOTTO_NUMBERS_COUNT
    );
    const lotto = new Lotto(numbers);
    lottos.push(lotto);
  }

  return lottos;
}

export async function getWinningNumbersAndBonus() {
  const winningNumbersInput = await Console.readLineAsync(
    CONSTANTS.WINNING_NUMBER_INPUT_MESSAGE
  );
  const winningNums = winningNumbersInput
    .split(",")
    .map((number) => Number(number.trim()));
  const bonusNum = await Console.readLineAsync(
    CONSTANTS.BONUS_NUMBER_INPUT_MESSAGE
  );
  return { winningNums, bonusNum };
}

export function countResults(lottos, winningNums, bonusNum, statistics) {
  const lottoCnt = lottos.length;
  for (let i = 0; i < lottoCnt; i++) {
    const res = lottos[i].result(winningNums, bonusNum);
    countMatchingNum(res.cnt, statistics);
  }
  return statistics;
}

function countMatchingNum(cnt, statistics) {
  switch (cnt) {
    case 3:
      statistics.fifth_prize++;
      statistics.totalPrice += CONSTANTS.MATCH_3;
      break;
    case 4:
      statistics.fourth_prize++;
      statistics.totalPrice += CONSTANTS.MATCH_4;
      break;
    case 5:
      if (res.hasBonus) {
        statistics.second_prize++;
        statistics.totalPrice += CONSTANTS.MATCH_5_WITH_BONUS;
        break;
      }
      statistics.third_prize++;
      statistics.totalPrice += CONSTANTS.MATCH_5;
      break;
    case 6:
      statistics.first_prize++;
      statistics.totalPrice += CONSTANTS.MATCH_6;
      break;
    default:
      break;
  }
}

export function printStatistics(purchaseAmount, statistics) {
  const roundedProfitPercentage = (
    (statistics.totalPrice / purchaseAmount) *
    100
  ).toFixed(1);
  Console.print(CONSTANTS.LOTTO_STATISTICS_HEADER);
  Console.print(`${CONSTANTS.PRIZE_3_MATCH}${statistics.fifth_prize}개`);
  Console.print(`${CONSTANTS.PRIZE_4_MATCH}${statistics.fourth_prize}개`);
  Console.print(`${CONSTANTS.PRIZE_5_MATCH}${statistics.third_prize}개`);
  Console.print(
    `${CONSTANTS.PRIZE_5_MATCH_WITH_BONUS}${statistics.second_prize}개`
  );
  Console.print(`${CONSTANTS.PRIZE_6_MATCH}${statistics.first_prize}개`);
  Console.print(
    `${CONSTANTS.TOTAL_PROFIT_PERCENTAGE}${roundedProfitPercentage}%입니다.`
  );
}
