import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from "./constants/Messages.js";

/*
추가된 요구 사항
함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
else를 지양한다.
  힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
  단위 테스트 작성이 익숙하지 않다면 __tests__/LottoTest.js를 참고하여 학습한 후 테스트를 구현한다.
*/

class App {
  async play() {
    const INPUT_CASH = await this.inputCash();
    const ARRAY_OF_GAMES = this.getLottoNumbers(this.validateCash(INPUT_CASH));
    const WINNING_NUMBER = await this.inputWinningNumber();
    const VERIFIED_WINNING_NUMBER = this.validateWinningNumber(WINNING_NUMBER);
    const BOUNUS_NUMBER = Number(await this.inputBonusNumber());
    const VERIFIED_BOUNUS_NUMBER = this.validateBonusNumber(
      VERIFIED_WINNING_NUMBER,
      BOUNUS_NUMBER
    );
    const NUMBER_OF_WINS = this.compareLottoNumber(
      ARRAY_OF_GAMES,
      VERIFIED_WINNING_NUMBER,
      VERIFIED_BOUNUS_NUMBER
    );
    const array = this.calculatePrize(NUMBER_OF_WINS);
    this.showLottoResult(array, INPUT_CASH);
  }

  inputCash() {
    const INPUT_CASH = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_CASH_MESSAGE
    );
    return INPUT_CASH;
  }

  validateCash(CASH) {
    const CHANGE = +CASH % 1000;
    if (CHANGE === 0) {
      const NUMBER_OF_GAMES = CASH / 1000;
      return NUMBER_OF_GAMES;
    }
    throw new Error("[ERROR] 구입금액은 1000 단위 정수로 입력이 가능합니다.");
  }

  getLottoNumbers(cash) {
    MissionUtils.Console.print(cash + OUTPUT_MESSAGES.PURCHASE_QUANTITY);
    const ARRAY_OF_GAMES = [];
    for (let i = 0; i < cash; i++) {
      const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const SORTED_LOTTO_NUMBER = LOTTO_NUMBER.sort((a, b) => {
        return a - b;
      });
      console.log(SORTED_LOTTO_NUMBER);
      ARRAY_OF_GAMES.push(SORTED_LOTTO_NUMBER);
    }
    console.log("");
    return ARRAY_OF_GAMES;
  }

  inputWinningNumber() {
    const WINNING_NUMBER = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_WINNING_NUMBER
    );
    return WINNING_NUMBER;
  }

  validateWinningNumber(WINNING_NUMBER) {
    const WINNING_NUMBER_ARRAY = WINNING_NUMBER.split(",").map(Number);
    const UNIQUE_ARRAY = [...new Set(WINNING_NUMBER_ARRAY)];
    if (WINNING_NUMBER_ARRAY.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!WINNING_NUMBER_ARRAY.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 수여야 합니다.");
    }
    if (WINNING_NUMBER_ARRAY.length !== UNIQUE_ARRAY.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 수여야 합니다.");
    }
    //정수 여부 확인?
    return WINNING_NUMBER_ARRAY;
  }

  inputBonusNumber() {
    const BOUNUS_NUMBER = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_BOUNUS_NUMBER
    );
    return BOUNUS_NUMBER;
  }

  validateBonusNumber(VERIFIED_WINNING_NUMBER, BOUNUS_NUMBER) {
    if (BOUNUS_NUMBER < 1 || BOUNUS_NUMBER > 45) {
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 수여야 합니다.");
    }
    if (VERIFIED_WINNING_NUMBER.includes(BOUNUS_NUMBER)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    return BOUNUS_NUMBER;
  }

  compareLottoNumber(lottoNumber, winningNumber, bonusNumber) {
    const NUMBER_OF_WINS = [];
    let bonus = 0;
    for (let i = 0; i < lottoNumber.length; i++) {
      const EACH_LOTTO_GAME = lottoNumber[i];
      const MATCHING_NUMBER = EACH_LOTTO_GAME.filter((element) =>
        winningNumber.includes(element)
      );
      if (
        MATCHING_NUMBER.length === 5 &&
        EACH_LOTTO_GAME.includes(bonusNumber)
      ) {
        bonus++;
        continue;
      }
      if (MATCHING_NUMBER.length >= 3) {
        NUMBER_OF_WINS.push(MATCHING_NUMBER.length);
      }
    }
    return [NUMBER_OF_WINS, bonus];
  }

  calculatePrize(NUMBER_OF_WINS) {
    const arr = NUMBER_OF_WINS[0];
    const bonus = NUMBER_OF_WINS[1];
    const counts = Array.from({ length: 4 }, () => 0);
    arr.forEach((num) => {
      if (num >= 3 && num <= 6) {
        counts[num - 3]++;
      }
    });
    return [counts, bonus];
  }

  showLottoResult(array, cash) {
    const prize =
      array[0][0] * 5000 +
      array[0][1] * 50000 +
      array[0][2] * 1500000 +
      array[0][3] * 2000000000 +
      array[1] * 30000000;
    MissionUtils.Console.print(OUTPUT_MESSAGES.WINNING_STATISTICS);
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.CORRECT_COUNT_OUTPUT_3 + array[0][0] + "개"
    );
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.CORRECT_COUNT_OUTPUT_4 + array[0][1] + "개"
    );
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.CORRECT_COUNT_OUTPUT_5 + array[0][2] + "개"
    );
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.CORRECT_COUNT_BONUS + array[1] + "개"
    );
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.CORRECT_COUNT_OUTPUT_6 + array[0][3] + "개"
    );
    const RATE_OF_RETURN = ((prize / cash) * 100).toFixed(1);
    MissionUtils.Console.print(
      OUTPUT_MESSAGES.RATE_OF_RETURN + RATE_OF_RETURN + "%입니다."
    );
  }
}
export default App;

//입력받은 값을 검증하고, 해당 값을 가지고 연산을 수행해서 결과값을 도출하는 것
