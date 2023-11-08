import { Console } from '@woowacourse/mission-utils';

async function tryToGetPurchaseAmount(inputview) {
  let purchaseAmount;
  while (true) {
    try {
      purchaseAmount = await inputview.readPurchaseAmount();
      break;
    } catch (err) {
      Console.print(err.message);
    }
  }
  return purchaseAmount;
}

async function tryToGetLottery(inputview) {
  let lotteryNumbers;
  while (true) {
    try {
      lotteryNumbers = await inputview.readLotteryNumbers();
      break;
    } catch (err) {
      Console.print(err.message);
    }
  }
  return lotteryNumbers;
}

async function tryToGetBonusNumber(inputview, lotteryNumbers) {
  let bonusNumber;
  while (true) {
    try {
      bonusNumber = await inputview.readBonusNumber(lotteryNumbers);
      break;
    } catch (err) {
      Console.print(err.message);
    }
  }
  return bonusNumber;
}

export { tryToGetBonusNumber, tryToGetPurchaseAmount, tryToGetLottery };
