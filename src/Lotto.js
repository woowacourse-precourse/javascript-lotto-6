import { Console } from "@woowacourse/mission-utils";
import ValidatePrice from "./ValidatePrice";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateBonusNum(numbers, bonusNum);
    this.#numbers = numbers;
  }

  getPrice = async () => {
    let price;

    do {
      try {
        price = await Console.readLineAsync("구입 금액을 입력해 주세요.");
        price = ValidatePrice(price);
      } catch(error) {
        throw new Error(error.message);
      }
    } while(!price);

    return price;
  };

  #hasDuplicates = (numbers) => {
    const uniqueNumbers = [...new Set(numbers)];
    return numbers.length !== uniqueNumbers.length;
  };

  #validate(numbers) {
    if (!numbers.isArray())
      throw new Error("[ERROR] 콤마(,)로 구분해야 합니다.");
    if (numbers.every(num => Number.isNaN(num)))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (this.#hasDuplicates(numbers))
      throw new Error("[ERROR] 서로 다른 숫자를 입력해야 합니다.");
    if (numbers.some(num => num <= 0 || num >= 46))
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (numbers.some(num => num >= 1 && num <= 45 && Number.isInteger(num)) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
  }

  #validateBonusNum(numbers, bonusNum) {
    if (bonusNum.isArray())
      throw new Error("[ERROR] 숫자는 1개만 입력해야 합니다.");
    if (Number.isNaN(bonusNum))
      throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (numbers.includes(bonusNum))
      throw new Error("[ERROR] 6개의 당첨 번호 이외의 숫자를 입력해야 합니다.");
    if (bonusNum <= 0 || bonusNum >= 46)
      throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해야 합니다.");
    if (bonusNum >= 1 && bonusNum <= 45 && Number.isInteger(bonusNum) === false)
      throw new Error("[ERROR] 1부터 45 사이의 정수를 입력해야 합니다.");
  }

  async start() {
    await this.getPrice();
    await this.getSixNum();
    await this.getBonusNum();
  }
}

export default Lotto;