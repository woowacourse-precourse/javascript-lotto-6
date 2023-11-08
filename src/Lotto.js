import { Console } from "@woowacourse/mission-utils";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.\n");
    }
	for (let i = 0; i < numbers.length ; i++)
	{
		if (isNaN(numbers[i]))
			throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.\n");
		if (numbers.indexOf(numbers[i]) != numbers.lastIndexOf(numbers[i]))
			throw new Error("[ERROR] 로또 번호는 중복되지 않은 숫자여야 합니다.\n");
		if (numbers[i] < 1 || numbers[i] > 45)
			throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.\n");
	}
  }

  getNumbers()
  {
	  return this.#numbers;
  }

  checkWinningNumbers(winNumbers) {
    let count = 0;
    for (const num of this.#numbers) {
      if (winNumbers.includes(num)) {
        count++;
      }
    }
    return count;
  }

  checkBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return true;
    return false;
  }
}

export default Lotto;
