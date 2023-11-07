const { Console } = require("@woowacourse/mission-utils");

async function getWinningNumbers() {
  Console.print("당첨 번호를 입력해주세요.")
  const input = await Console.readLineAsync();
  const winningNumbers = input.split(",").map(Number);
  Console.print(winningNumbers);

  return winningNumbers;
}

module.exports = getWinningNumbers;
