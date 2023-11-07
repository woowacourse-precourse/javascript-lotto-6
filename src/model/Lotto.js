import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers, bonus);
    this.#numbers = numbers;
  }

  #validate(numbers, bonus) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if (new Set(numbers).size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 중복이 안되어야 합니다.");

    if (numbers.some((number) => number < 1 || number > 45))
      throw new Error("[ERROR] 로또 번호는 1부터 45사이로 설정해야 합니다.");

    if (numbers.includes(bonus))
      throw new Error(
        "[ERROR] 보너스 번호는 로또 번호와 중복이 되면 안됩니다."
      );

    if (bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이로 설정해야 합니다.");
  }
  #checkResult(count, getBonus, result) {
    if (count == 6) result["1st"]++;
    if (count == 5 && getBonus) result["2nd"]++;
    if (count == 5 && !getBonus) result["3rd"]++;
    if (count == 4) result["4th"]++;
    if (count == 3) result["5th"]++;
  }
  #calculateProfitRate(result, price) {
    const totalRate =
      ((result["1st"] * 2000000000 +
        result["2nd"] * 30000000 +
        result["3rd"] * 1500000 +
        result["4th"] * 50000 +
        result["5th"] * 5000) /
        price) *
      100;
    return totalRate.toFixed(1);
  }
  checkLotto(purchaseTickets, bonus, price) {
    const result = {
      "1st": 0,
      "2nd": 0,
      "3rd": 0,
      "4th": 0,
      "5th": 0,
    };
    purchaseTickets.forEach((purchaseTicket) => {
      const { count, getBonus } = this.#correctAnswer(purchaseTicket, bonus);
      this.#checkResult(count, getBonus, result);
    });
    const calculateProfitRate = this.#calculateProfitRate(result, price);
    return { result, calculateProfitRate };
  }
  #correctAnswer(purchaseTicket, bonus) {
    let count = 0;
    let getBonus = false;
    if (purchaseTicket.includes(bonus)) getBonus = true;
    for (const purchaseNumber of purchaseTicket) {
      if (this.#numbers.includes(purchaseNumber)) count++;
    }
    return { count, getBonus };
  }
}

export default Lotto;
