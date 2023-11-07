import { MissionUtils } from "@woowacourse/mission-utils";

class LottoMachine {
  static prizeList = {
    3: { countMatch: 0, prize: 5000 },
    4: { countMatch: 0, prize: 50000 },
    5: { countMatch: 0, prize: 1500000 },
    "5+1": { countMatch: 0, prize: 30000000 },
    6: { countMatch: 0, prize: 2000000000 },
  };

  static async getWinningNumbers() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");

    if (typeof USER_INPUT !== "string" || USER_INPUT.trim() === "") {
      throw new Error("올바른 당첨 번호를 입력해야 합니다.");
    }

    const USER_INPUT_NUMBERS = USER_INPUT.split(",")
      .map((number) => parseInt(number.trim(), 10))
      .sort((a, b) => a - b);
    return USER_INPUT_NUMBERS;
  }

  static async askWinningNumbers() {
    let winningNumbers;

    while (true) {
      try {
        winningNumbers = await LottoMachine.getWinningNumbers();
        LottoMachine.validateNumbersArray(winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return winningNumbers;
  }

  // 숫자들 배열의 유효성 검사
  static validateNumbersArray(numbers) {
    const areAllnumbersValid = numbers.every(
      (number) => !isNaN(number) && number >= 1 && number <= 45
    );
    const hasCorrectLength = numbers.length === 6;
    const hasAllUniqueNumbers = new Set(numbers).size === 6;
    if (!areAllnumbersValid || !hasCorrectLength || !hasAllUniqueNumbers) {
      throw new Error(
        "[ERROR] 입력은 1~45사이의 숫자이고, 6개의 숫자여야 합니다."
      );
    }
  }

  // 단일 숫자의 유효성 검사
  static validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 입력은 1~45사이의 숫자여야 합니다.");
    }
  }

  static async getBonusNumber() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const USER_INPUT_BONUS_NUMBER = parseInt(USER_INPUT, 10);
    return USER_INPUT_BONUS_NUMBER;
  }

  static async askBonusNumber() {
    let bonusNumber;

    while (true) {
      try {
        bonusNumber = await LottoMachine.getBonusNumber();
        LottoMachine.validateNumber(bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  static displayLottoTickets(lottoTicket) {
    MissionUtils.Console.print(`${lottoTicket.length}개를 구매했습니다.`);
    lottoTicket.forEach((ticket) => {
      const TICKET_NUMBERS = ticket.getLottoNumbers();
      MissionUtils.Console.print(`[${TICKET_NUMBERS.join(", ")}]`);
    });
  }

  static async drawWinningNumbers() {
    const WINNING_NUMBERS = new Set(await LottoMachine.askWinningNumbers());
    const BONUS_NUMBER = await LottoMachine.askBonusNumber();
    return { WINNING_NUMBERS, BONUS_NUMBER };
  }

  static calculatePrize(lottoTickets, winningNumbers, bonusNumber) {
    const PRIZE_LIST = { ...LottoMachine.prizeList };

    lottoTickets.forEach((lottoTicket) => {
      const MATCH_COUNT = LottoMachine.countMatchNumbers(
        lottoTicket.getLottoNumbers(),
        winningNumbers
      );
      const BONUS_MATCH_COUNT = LottoMachine.isBonusNumberMatch(
        lottoTicket,
        bonusNumber
      );

      if (MATCH_COUNT === 5 && BONUS_MATCH_COUNT) {
        PRIZE_LIST["5+1"].countMatch += 1;
      } else if (PRIZE_LIST[MATCH_COUNT]) {
        PRIZE_LIST[MATCH_COUNT].countMatch += 1;
      }
    });

    return PRIZE_LIST;
  }

  static isBonusNumberMatch(lottoTicket, bonusNumber) {
    return lottoTicket.getLottoNumbers().includes(bonusNumber);
  }

  static countMatchNumbers(lottoTicket, winningNumbers) {
    return lottoTicket.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static displayGameResult(prizeList, ticketAmount) {
    MissionUtils.Console.print("당첨 통계\n---");

    Object.entries(prizeList).forEach(([match, { countMatch, prize }]) => {
      const COUNT_MATCH_OUTPUT =
        match === "5+1" ? "5개 일치, 보너스 볼 일치" : `${match}개 일치`;
      MissionUtils.Console.print(
        `${COUNT_MATCH_OUTPUT} (${prize.toLocaleString()}원) - ${countMatch}개`
      );
    });

    const TOTAL_PRIZE = LottoMachine.calculateTotalPrize(prizeList);
    const PROFIT_RATE = (TOTAL_PRIZE / ticketAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(1)}%입니다.`);
  }

  static calculateTotalPrize(prize) {
    return Object.values(prize).reduce(
      (acc, { countMatch, prize }) => acc + countMatch * prize,
      0
    );
  }
}

export default LottoMachine;
