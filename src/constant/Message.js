import { Console } from "@woowacourse/mission-utils";

export const userInputMessage = Object.freeze({
  purchase: () => Console.print("구입금액을 입력해 주세요."),
  winningNumber: () => Console.print("당첨 번호를 입력해주세요."),
  bonusNumber: () => Console.print("보너스 번호를 입력해주세요."),
});

export const purchaseResultMessage = (amount) => {
  Console.print(`${amount}개를 구매했습니다.`);
};

export const randomNumberMessage = (randomNumber) => {
  Console.print(`[${randomNumber.join(", ")}]`);
};

export const winningResultMessage = (winningResult) => {
  Console.print("당첨통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${winningResult.fifth}개`);
  Console.print(`4개 일치 (50,000원) - ${winningResult.fourth}개`);
  Console.print(`5개 일치 (1,500,000원) - ${winningResult.third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResult.second}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${winningResult.first}개`);
};

export const returnRateMessage = (rate) => {
  Console.print(`총 수익률은 ${rate}%입니다.`);
};

export const lineBreakMessage = () => Console.print("\n");
