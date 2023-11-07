import Lotto from "./Lotto.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let ARRAY_LOTTO = [];
    let WINNING_NUMBERS = [];
    let BONUS_NUMBER = 0;

    for (let i = 0; i < 3; i++) {
      try {
        ARRAY_LOTTO = await this.BUY_LOTTO();

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    for (let j = 0; j < 3; j++) {
      try {
        [WINNING_NUMBERS, BONUS_NUMBER] = await this.CREATE_WINNING_NUMBERS(ARRAY_LOTTO);
        
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    this.RESULT(ARRAY_LOTTO, WINNING_NUMBERS, BONUS_NUMBER);
  }

  BUY_LOTTO = async () => {
    const PAY = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
    
    if (isNaN(PAY) || PAY % 1000 !== 0 || PAY < 1000) {
      throw new Error("[ERROR] 잘못된 금액 입니다.");
    }

    const COUNT = PAY/1000;
    const ARRAY_LOTTO = []; // COUNT만큼 발행된 로또 목록
    
    for (let i = 0; i < COUNT; i++) { // COUNT만큼 랜덤 로또 발행
      const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      LOTTO_NUMBERS.sort((a, b) => a.toString() - b.toString()); // 로또번호 오름차순으로 정렬

      const LOTTO = new Lotto(LOTTO_NUMBERS);
      
      ARRAY_LOTTO.push(LOTTO);
    }

    Console.print(`\n${COUNT}개를 구매했습니다.`);

    ARRAY_LOTTO.forEach((lotto) => {
      Console.print(lotto.toString())
    });

    return ARRAY_LOTTO;
  }

  CREATE_WINNING_NUMBERS = async (ARRAY_LOTTO) => {
    const WINNING_INPUT = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);
    const BONUS_INPUT = await Console.readLineAsync(`\n보너스 번호를 입력해 주세요.\n`);
    const ARRAY_WINNING_INPUT = WINNING_INPUT.split(",").map(Number);
    const WINNING_NUMBERS = new Lotto(ARRAY_WINNING_INPUT).toString();
    const BONUS_NUMBER = Number(BONUS_INPUT);

    if ( // 당첨번호 6개, 보너스 번호 1개가 1~45 사이의 숫자가 아니거나 7개의 숫자가 중복된 숫자인 경우
      WINNING_NUMBERS.includes(BONUS_NUMBER) ||
      BONUS_NUMBER < 1 || BONUS_NUMBER > 45
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 숫자여야 합니다.");
    }
    
    return [WINNING_NUMBERS, BONUS_NUMBER];
  }

  RESULT = (ARRAY_LOTTO, WINNING_NUMBERS, BONUS_NUMBER) => {
    const LOTTO_RESULT = [
      { title: "3개 일치", prize: 5000, count: 0 },
      { title: "4개 일치", prize: 50000, count: 0 },
      { title: "5개 일치", prize: 1500000, count: 0 },
      { title: "5개 일치, 보너스 볼 일치", prize: 30000000, count: 0 },
      { title: "6개 일치", prize: 2000000000, count: 0 },
    ];

    let calculateGrossReturn = 0; // 총 수익률
    let totalPrize = 0; // 총 당첨금

    for (const LOTTO of ARRAY_LOTTO) {
      const CHECK = LOTTO.checkLotto(WINNING_NUMBERS, BONUS_NUMBER);
      const FOUND_RESULT = LOTTO_RESULT.find((result) => result.title === CHECK); // 내 로또와 당첨 및 보너스 번호 비교
      
      if (FOUND_RESULT) { // 로또 당첨 count 및 총 당첨금 계산
        FOUND_RESULT.count++;
        totalPrize += FOUND_RESULT.prize * FOUND_RESULT.count;
      }
    }

    if (totalPrize > 0) {
      calculateGrossReturn = totalPrize/(ARRAY_LOTTO.length * 1000) * 100; // 총 당첨금 ÷ 총 구입금액 * 100
    }

    const GROSS_RETURN = calculateGrossReturn.toLocaleString(undefined, {maximumFractionDigits: 1}); // 천단위 "," 추가(소수점 둘째자리 반올림)
    const STATISTICS = LOTTO_RESULT.map((result) => { // 당첨 통계 계산
      return `${result.title} (${result.prize.toLocaleString()}원) - ${result.count}개`;
    }).join("\n");

    Console.print(
      `\n당첨 통계\n`
      + `---\n`
      + STATISTICS
      + `\n총 수익률은 ${GROSS_RETURN}%입니다.`
    )
  }
}

export default App;
