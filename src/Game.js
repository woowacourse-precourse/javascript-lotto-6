import InputOutput from "./InputOutput";
import Validate from "./Validate";
import Lotto from "./Lotto";
import ErrorMessages from "./Error";
import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
  winMessages = [
    "",
    "6개 일치 (2,000,000,000원) - ",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    "5개 일치 (1,500,000원) - ",
    "4개 일치 (50,000원) - ",
    "3개 일치 (5,000원) - ",
  ];

  winPrizes = [0, 2000000000, 30000000, 1500000, 50000, 5000, 0];

  async getInputLoop(inputFunction, param = []) {
    while (true) {
      try {
        const result = await inputFunction(...param);
        return result;
      } catch (error) {
        InputOutput.print(error.message);
      }
    }
  }

  calculateLottoCountFromMoney(money) {
    const lottoCount = money / 1000;
    InputOutput.print(`${lottoCount}개를 구매했습니다.`);
    return lottoCount;
  }

  getUserMoney = async () => {
    const userInput = await InputOutput.getInput("구입금액을 입력해 주세요.");
    if (!Validate.isNumeric(userInput)) throw new Error(ErrorMessages.invalidInput("숫자를 입력해주세요"));
    if (!Validate.isMultipleOf1000(userInput)) throw new Error(ErrorMessages.invalidInput("돈은 천원 단위로 입력해주세요"));
    return this.calculateLottoCountFromMoney(userInput);
  };

  getWinningNumber = async () => {
    const userInput = await InputOutput.getInput("당첨 번호를 입력해 주세요.");
    const winningNumbers = userInput.split(",").map((value) => +value);
    if (!Validate.isLottoNumbersFormat(winningNumbers)) throw new Error(ErrorMessages.lottoFormatError);
    return winningNumbers;
  };

  getBonusNumber = async (winningNumbers) => {
    const userInput = await InputOutput.getInput("보너스 번호를 입력해 주세요.");
    const bonusNumber = +userInput;
    if (!Validate.isNumeric(userInput)) throw new Error(ErrorMessages.invalidInput("숫자를 입력해 주세요"));
    if (bonusNumber < 1 || 45 < bonusNumber) throw new Error(ErrorMessages.lottoNumberRangeError);
    if (winningNumbers.includes(bonusNumber)) throw new Error(ErrorMessages.bonusNumberError);
    return bonusNumber;
  };

  createAndPrintLottoTickets(lottoCount) {
    const lottoTickets = [...Array(lottoCount)].map((_) => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lotto.printLottoNumbers();
      return lotto;
    });
    return lottoTickets;
  }

  printLottoResult(winInfoArray, lottoCount) {
    for (let i = 5; i > 0; i--) {
      InputOutput.print(`${this.winMessages[i]}${winInfoArray[i]}개`);
    }
  }

}

export default Game;
