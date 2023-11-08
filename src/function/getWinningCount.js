import { Console } from "@woowacourse/mission-utils";

export const getWinningCount = async () => {
  const userInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.");

  const winningNumbers = userInput.split(",").map((num) => {
    if (Number(num) > 45) {
      throw new Error("로또 번호는 45이상은 입력이 불가합니다.");
    }

    return Number(num);
  });

  return winningNumbers;
};
