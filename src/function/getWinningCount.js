import { Console } from "@woowacourse/mission-utils";

export const getWinningCount = async () => {
  const userInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.");

  const winningNumbers = userInput.split(",").map((num) => {
    return Number(num);
  });

  return winningNumbers;
};
