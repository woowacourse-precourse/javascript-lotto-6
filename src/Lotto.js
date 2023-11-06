import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현

  countMatchNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.has(number)).length;
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

// class LottoPurchase {
//   async #getLottoAmount() {
//     const USER_INPUT =
//       await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
//     const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
//     return USER_INPUT_PRICE;
//   }

//   #validateAmount(lottoAmount) {
//     if (
//       isNaN(lottoAmount) ||
//       !lottoAmount ||
//       lottoAmount < 1000 ||
//       lottoAmount % 1000 !== 0
//     ) {
//       throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
//     }
//   }

//   async #purchaseLottoAmount() {
//     let purchaseAmount;

//     while (true) {
//       try {
//         purchaseAmount = await this.#getLottoAmount();
//         this.#validateAmount(purchaseAmount);
//         break;
//       } catch (error) {
//         MissionUtils.Console.print(error.message);
//       }
//     }

//     return purchaseAmount;
//   }

//   async askPurchaseLottoAmount() {
//     return this.#purchaseLottoAmount();
//   }
// }

// class LottoTicket {
//   #lottoTickets = [];

//   constructor(purchaseAmount) {
//     for (let i = 0; i < purchaseAmount / 1000; i++) {
//       const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
//         1,
//         45,
//         6
//       );
//       this.#lottoTickets.push(new Lotto(LOTTO_NUMBERS));
//     }
//   }

//   getLottoTickets() {
//     return this.#lottoTickets;
//   }
// }

// class LottoMachine {
//   prizeList = {
//     3: { countMatch: 0, prize: 5000 },
//     4: { countMatch: 0, prize: 50000 },
//     5: { countMatch: 0, prize: 1500000 },
//     "5+1": { countMatch: 0, prize: 30000000 },
//     6: { countMatch: 0, prize: 2000000000 },
//   };

//   constructor() {
//     this.winningNumbers = new Set(); // 각 번호 간 중복 방지
//     this.bonusNumber = null;
//   }

//   async #getWinningNumbers() {
//     const USER_INPUT =
//       await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
//     const USER_INPUT_NUMBERS = USER_INPUT.split(",")
//       .map((number) => parseInt(number.trim(), 10))
//       .sort((a, b) => a - b);
//     return USER_INPUT_NUMBERS;
//   }

//   async #askWinningNumbers() {
//     let winningNumbers;

//     while (true) {
//       try {
//         winningNumbers = await this.#getWinningNumbers();
//         this.#validateNumbersArray(winningNumbers);
//         break;
//       } catch (error) {
//         MissionUtils.Console.print(error.message);
//       }
//     }

//     return winningNumbers;
//   }

//   // 숫자들 배열의 유효성 검사
//   #validateNumbersArray(numbers) {
//     const areAllnumbersValid = numbers.every((number) =>
//       this.#validateNumber(number)
//     );
//     const hasCorrectLength = numbers.length === 6;
//     const hasAllUniqueNumbers = new Set(numbers).size === 6;
//     if (!areAllnumbersValid || !hasCorrectLength || !hasAllUniqueNumbers) {
//       throw new Error(
//         "[ERROR] 입력은 1~45사이의 숫자이고, 6개의 숫자여야 합니다."
//       );
//     }
//   }

//   // 단일 숫자의 유효성 검사
//   #validateNumber(number) {
//     if (isNaN(number) || number < 1 || number > 45) {
//       throw new Error("[ERROR] 입력은 1~45사이의 숫자여야 합니다.");
//     }
//   }

//   async #getBonusNumber() {
//     const USER_INPUT =
//       await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
//     const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
//     return USER_INPUT_PRICE;
//   }

//   async #askBonusNumber() {
//     let bonusNumber;

//     while (true) {
//       try {
//         bonusNumber = await this.#getBonusNumber();
//         this.#validateNumber(bonusNumber);
//         break;
//       } catch (error) {
//         MissionUtils.Console.print(error.message);
//       }
//     }

//     return bonusNumber;
//   }

//   displayLottoTickets(lottoTicket) {
//     const TICKETS = lottoTicket.getLottoTickets();

//     MissionUtils.Console.print(`${TICKETS.length}개를 구매했습니다.`);

//     for (const TICKET of TICKETS) {
//       MissionUtils.Console.print(`${[TICKET.getLottoNumbers().join(", ")]}`);
//     }
//   }

//   async drawWinningNumbers() {
//     this.winningNumbers = new Set(await this.#askWinningNumbers());
//     this.bonusNumber = await this.#askBonusNumber();
//   }

//   calculatePrize(lottoTickets) {
//     lottoTickets.getLottoTickets().forEach((lottoTicket) => {
//       const MATCH_COUNT = lottoTicket.countMatchNumbers(this.winningNumbers);
//       const BONUS_MATCH_COUNT = this.isBonusNumberMatch(lottoTicket);

//       if (MATCH_COUNT === 5 && BONUS_MATCH_COUNT) {
//         this.prizeList["5+1"].countMatch += 1;
//       } else if (this.prizeList[MATCH_COUNT]) {
//         this.prizeList[MATCH_COUNT].countMatch += 1;
//       }
//     });

//     return this.prizeList;
//   }

//   isBonusNumberMatch(lottoTicket) {
//     return lottoTicket.getLottoNumbers().includes(this.bonusNumber);
//   }

//   displayGameResult(prizeList, ticketAmount) {
//     MissionUtils.Console.print("당첨 통계\n---");

//     Object.entries(prizeList).forEach(([match, { countMatch, prize }]) => {
//       const COUNT_MATCH_OUTPUT =
//         match === "5+1" ? "5개 일치, 보너스 볼 일치" : `${match}개 일치`;
//       MissionUtils.Console.print(
//         `${COUNT_MATCH_OUTPUT} (${prize.toLocaleString()}원) - ${countMatch}개`
//       );
//     });

//     const TOTAL_PRIZE = this.#calculateTotalPrize(prizeList);
//     const PROFIT_RATE = (TOTAL_PRIZE / ticketAmount) * 100;
//     MissionUtils.Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(2)}%입니다.`);
//   }

//   #calculateTotalPrize(prize) {
//     return Object.values(prize).reduce(
//       (acc, { countMatch, prize }) => acc + countMatch * prize,
//       0
//     );
//   }
// }

export default Lotto;
