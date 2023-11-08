import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "../validate/Validate.js";

class Computer {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;
  static LOTTO_PRICE = 1000;
  static INPUT_LOTTO_NUMBER_MESSAGE = "당첨 번호를 입력해 주세요.\n";
  static INPUT_BONUS_NUMBER_MESSAGE = "보너스 번호를 입력해 주세요.\n";

  constructor() {
    this.validate = new Validate();
  }

  // 사용자가 구매한 랜덤 로또 번호 생성 함수
  issuanceLotto = (lottoAmount) => {
    const purchaseQuantity = lottoAmount / Computer.LOTTO_PRICE;
    Console.print(`${purchaseQuantity}개를 구매했습니다.`);
    var lottoList = Array.from({ length: purchaseQuantity }, () => []);

    for (let i = 0; i < purchaseQuantity; i++) {
      while (lottoList[i].length !== 6) {
        const lottoNumber = Random.pickNumberInRange(
          Computer.MIN_LOTTO_NUMBER,
          Computer.MAX_LOTTO_NUMBER,
        );
        if (!lottoList[i].includes(lottoNumber)) {
          lottoList[i].push(lottoNumber);
        }
      }
      Console.print(lottoList[i]);
    }
    return lottoList;
  };

  // 당청 로또 번호 생성 함수
  async inputLottoNumber() {
    const LottoNumbers = await Console.readLineAsync(
      Computer.INPUT_LOTTO_NUMBER_MESSAGE,
    );
    if (this.validate.validateLottoNumbers(LottoNumbers)) {
      return LottoNumbers;
    }
  }
  // 보너스 번호 생성 함수
  async inutBonusNumber(lottoNumber) {
    const bonusNumber = await Console.readLineAsync(
      Computer.INPUT_BONUS_NUMBER_MESSAGE,
    );
    this.validate.validateBonusNumber(lottoNumber, bonusNumber);
    return bonusNumber;
  }

  // 결과 내역 함수
  winningDetails = (lottoNumber, bonusNumber, lottoList) => {
    const countMatchingNumbers = (userLotto, winningLotto) => {
      return userLotto.filter((number) => winningLotto.includes(number)).length;
    };

    const calculatePrizeMoney = (rank) => {
      switch (rank) {
        case 1:
          return 2000000000; // 1등
        case 2:
          return 30000000; // 2등
        case 3:
          return 1500000; // 3등
        case 4:
          return 50000; // 4등
        case 5:
          return 5000; // 5등
        default:
          return 0;
      }
    };
    const prizeMoney = [0, 0, 0, 0, 0]; // 1등부터 5등까지의 상금을 저장하는 배열

    for (const userLotto of lottoList) {
      const matchCount = countMatchingNumbers(userLotto, lottoNumber);
      const bonusMatch = userLotto.includes(bonusNumber);

      if (matchCount === 6) {
        prizeMoney[0] += 1; // 1등
      } else if (matchCount === 5 && bonusMatch) {
        prizeMoney[1] += 1; // 2등
      } else if (matchCount === 5) {
        prizeMoney[2] += 1; // 3등
      } else if (matchCount === 4) {
        prizeMoney[3] += 1; // 4등
      } else if (matchCount === 3) {
        prizeMoney[4] += 1; // 5등
      }
    }

    Console.print("당첨 내역:");
    Console.print(`1등(6개 일치): ${prizeMoney[0]}개`);
    Console.print(`2등(5개 + 보너스 일치): ${prizeMoney[1]}개`);
    Console.print(`3등(5개 일치): ${prizeMoney[2]}개`);
    Console.print(`4등(4개 일치): ${prizeMoney[3]}개`);
    Console.print(`5등(3개 일치): ${prizeMoney[4]}개`);

    // 총 수익 계산
    const totalPrize = prizeMoney.reduce((acc, count, index) => {
      const prize = calculatePrizeMoney(index + 1);
      return acc + count * prize;
    }, 0);

    Console.print(
      `총 수익률은 ${
        (totalPrize - lottoList.length * 1000) / (lottoList.length * 1000)
      }배입니다.`,
    );

    // 사용자가 구매한 로또 번호 및 당첨 번호 출력
    Console.print("사용자 로또 번호:");
    for (const userLotto of lottoList) {
      Console.print(userLotto.join(", "));
    }

    Console.print("당첨 번호:");
    Console.print(`로또 번호: ${lottoNumber.join(", ")}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  };
}

export default Computer;
