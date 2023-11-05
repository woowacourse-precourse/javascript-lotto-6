import { Random } from "@woowacourse/mission-utils";
import { LOTTERY_CONSTANTS } from "../constants/constants.js";

const generateRandomLottery = () => {
    const lottery = [];

    while(lottery.length < LOTTERY_CONSTANTS.lotteryLength) {
        const randomNumber = Random.pickNumberInRange(LOTTERY_CONSTANTS.minNumber, LOTTERY_CONSTANTS.maxNumber);
        if (!lottery.includes(randomNumber)) {
            lottery.push(randomNumber);
        }
    }
    
    return lottery.toSorted((a, b) => a - b);
}

export const generateLotteries = (numberOfLotteries) => {
  return Array.from(
    { length : numberOfLotteries },
    (lottery) => lottery = generateRandomLottery()
  );
}