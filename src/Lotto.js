import { Random, Console } from "@woowacourse/mission-utils";

class Lotto {
  #drawNumbers;

  constructor(numbers) {
    this.#validateDraw(numbers);
    this.#drawNumbers = numbers;
    this.rank = 0;
  }

  getLottoNumbers() {
    const randomLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomLottoNumber;
  }

  printLottoNumbers(amountOfLotto) {
    for (let i = 0; i < amountOfLotto; i++) {
      const lottoNumbers = this.getLottoNumbers();
      Console.print(lottoNumbers);
    }
  }

  async enterDrawNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const number = input.split(",");
    const drewNumbers = this.#validateDraw(number);
    return drewNumbers;
  }

  async enterBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const number = input.split(",");
    const bonusNumber = this.#valudateBonus(number);
    return bonusNumber;
  }

  #validateDraw(numbers) {
    if (!numbers) {
      return;
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    return numbers;
  }

  #valudateBonus(bonus) {
    if (!bonus) {
      return;
    }
    if (bonus.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
    return bonus;
  }

  resultOfLotto(drew, bonus) {
    let result = this.matchCountCheck(drew, bonus);
    let isBonus = this.matchBonusCheck(drew, bonus);
    if (result === 3) {
      return (this.rank = 5);
    }
    if (result === 4) {
      return (this.rank = 4);
    }
    if (result === 5) {
      return (this.rank = 3);
    }
    if (result === 5 && isBonus === true) {
      return (this.rank = 2);
    }
    if (result === 6) {
      return (this.rank = 1);
    }
    return (this.rank = 0);
  }

  matchCountCheck = (random, drew) => {
    const result = random.reduce((acc, cur) => {
      if (random.includes(cur)) {
        acc++;
      }
      return acc;
    }, 0);
    return result;
  };

  matchBonusCheck = (random, bonus) => {
    if (random.includes(bonus)) {
      return true;
    }
    return false;
  };
}
export default Lotto;
