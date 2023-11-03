import { Random, Console } from "@woowacourse/mission-utils";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
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

  enterDrawNumbers() {
    const input = Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const drawNumbers = input.split(",");
    return drawNumbers;
  }

  enterBonusNumber() {
    const bonusNumber = Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return bonusNumber;
  }
}

export default Lotto;
