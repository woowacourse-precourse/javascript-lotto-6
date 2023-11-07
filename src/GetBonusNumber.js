const { Console } = require("@woowacourse/mission-utils");

async function getBonusNumber() {
  const bonusNumber = await Console.readLineAsync("");

  Console.print(bonusNumber);

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 유효하지 않은 보너스 번호를 입력했습니다.");
  }

  return bonusNumber;
}

module.exports = getBonusNumber;