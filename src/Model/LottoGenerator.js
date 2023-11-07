import { Random } from "@woowacourse/mission-utils";
import { LOTTERY_CONSTANTS } from "../constants/constants.js";

const generateRandomLottery = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTERY_CONSTANTS.minNumber,
    LOTTERY_CONSTANTS.maxNumber,
    LOTTERY_CONSTANTS.lotteryLength
  ).toSorted((a, b) => a - b);
}

export const generateLotteries = (numberOfLotteries) => {
  return Array.from(
    { length : numberOfLotteries },
    (_) => generateRandomLottery()
  );
}