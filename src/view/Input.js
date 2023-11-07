import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

// 로또 구입 금액 입력
export async function inputAmount(){
  const amount = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);
  return amount;
}

// 당첨 번호 입력
export async function inputWinningNum(){
  const nums = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.intputWinningNumbers);
  const winningNums = nums.split(',').map(num => Number(num));
  return winningNums;
}

// 보너스 번호 입력
export async function inputBonnusNum(){
  const bonus = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.intputBonusNumber);
  return Number(bonus);
}