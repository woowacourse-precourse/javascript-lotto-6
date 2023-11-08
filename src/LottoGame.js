import { Random, Console } from "@woowacourse/mission-utils";

function lottoNumbersGenerator(NUMBER_OF_LOTTOS) {
  const USER_LOTTOS = [];
  for (let i = 0; i < NUMBER_OF_LOTTOS; i++) {
    const NUMBERS = Random.pickUniqueNumbersInRange(1, 45, 6);
    USER_LOTTOS.push(NUMBERS);
  }
  return USER_LOTTOS;
}

function printBuyingLottoNumbers(USER_LOTTOS) {
  Console.print(`${USER_LOTTOS.length}개를 구매했습니다.`);
  for (let i = 0; i < USER_LOTTOS.length; i++) {
    Console.print(`[${USER_LOTTOS[i].sort((a, b) => a - b).join(", ")}]`);
  }
}

function calculator(USER_LOTTOS, WINNING_LOTTO, BONUS_NUMBER) {
  const RESULT = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const ONE_LOTTO of USER_LOTTOS) {
    const INTERSECTION = ONE_LOTTO.filter((x) =>
      WINNING_LOTTO.getNumbers().includes(x)
    );
    const BONUS_MATCH = ONE_LOTTO.includes(BONUS_NUMBER);

    if (INTERSECTION.length === 6) {
      RESULT[1]++;
    } else if (INTERSECTION.length === 5) {
      if (BONUS_MATCH) {
        RESULT[2]++;
      } else {
        RESULT[3]++;
      }
    } else if (INTERSECTION.length === 4) {
      RESULT[4]++;
    } else if (INTERSECTION.length === 3) {
      RESULT[5]++;
    }
  }
  return RESULT;
}

function printResult(RESULT) {
  Console.print(`3개 일치 (5,000원) - ${RESULT[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${RESULT[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${RESULT[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${RESULT[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${RESULT[1]}개`);
}

function profit(BUYING_PRICE, RESULT) {
  const TOTAL_PRIZE =
    RESULT[1] * 2000000000 +
    RESULT[2] * 30000000 +
    RESULT[3] * 1500000 +
    RESULT[4] * 50000 +
    RESULT[5] * 5000;

  const PROFIT = ((TOTAL_PRIZE / BUYING_PRICE) * 100).toFixed(1);
  Console.print(`총 수익률은 ${PROFIT}%입니다.`);
}

export {
  lottoNumbersGenerator,
  printBuyingLottoNumbers,
  calculator,
  printResult,
  profit,
};
