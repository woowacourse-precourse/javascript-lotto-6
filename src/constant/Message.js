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
  Console.print(randomNumber);
};

export const winningResultMessage = ([first, second, third, fourth, fifth]) => {
  Console.print("당첨통계");
  Console.print("---");
  Console.print(`3개 일치 (5,000원) - ${fifth}개`);
  Console.print(`4개 일치 (5,000원) - ${fourth}개`);
  Console.print(`5개 일치 (5,000원) - ${third}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (5,000원) - ${second}개`);
  Console.print(`6개 일치 (5,000원) - ${first}개`);
};

export const returnRateMessage = (rate) => {
  Console.print(`총 수익률은 ${rate}% 입니다.`);
};

export const lineBreakMessage = () => Console.print("\n");
