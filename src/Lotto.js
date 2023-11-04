import { LOTTO_RULE, REGEX } from "./constants/BusinessNumber.js";


// 파라미터  : 숫자배열

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

    this.#validateExtends(numbers);
  }

  #validateExtends(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 중복이 숫자가 있거나 형식이 잘못됬습니다");
    }
    
    numbers.forEach((number) => {
      if (number > LOTTO_RULE.maxNumber || number < LOTTO_RULE.minNumber) {
        throw new Error("[ERROR] 1부터 45 사이의 숫자만 가능합니다");
      }

      if (REGEX.commaNumber.test(Number(number))) throw new Error("[ERROR] 오류");
    })
  }

  getLuckyNumbers() {
    return this.#numbers;
  }
}

export default Lotto;


