import { Console } from "@woowacourse/mission-utils";
import { amountValidate, bonusNumValidate } from "./Validation";

export const inputAmount = async () => {
  Console.print("구입금액을 입력해 주세요.");
  let amount = -1;

  while (true) {
    try {
      amount = await Console.readLineAsync();
      amountValidate(amount);
      break;
    } catch (e) {
      Console.print(e.message);
      continue;
    }
  }
  return amount;
};

export const inputWinningNums = async () => {
  Console.print("당첨 번호를 입력해 주세요.");
  const winningNums = await Console.readLineAsync();
  return winningNums.split(",").map(Number);
};

export const inputBonusNum = async () => {
  Console.print("보너스 번호를 입력해 주세요.");
  let bonusNum = -1;

  while (true) {
    try {
      bonusNum = await Console.readLineAsync();
      bonusNumValidate(bonusNum);
      break;
    } catch (e) {
      Console.print(e.message);
      continue;
    }
  }
  return bonusNum;
};

export const outputGameNums = (games) => {
  Console.print(`${games.length}개를 구매했습니다.`);
  for (let i = 0; i < games.length; i++) {
    Console.print(`[${games[i].join(", ")}]`);
  }
  Console.print();
};

export const outputResult = (result) => {
  Console.print("당첨 통계");
  Console.print("---");
  Console.print(`3개 일치 (5000원)- ${result[5]}개`);
  Console.print(`4개 일치 (50000원)- ${result[4]}개`);
  Console.print(`5개 일치 (1500000원)- ${result[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30000000원)- ${result[2]}개`);
  Console.print(`6개 일치 (2000000000원)- ${result[1]}개`);
};

export const outputEarningRate = (rate) => {
  Console.print(`총 수익률은 ${rate}%입니다.`);
};
