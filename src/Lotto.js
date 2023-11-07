class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;

    for (let num of numbers) {
      if (new Set(numbers).size !== numbers.length) {
        throw new Error("[ERROR] 당첨 번호엔 중복이 없어야 합니다.");
      }
      if (typeof num != Number)
        throw new Error("[ERROR] 당첨 값은 숫자로만 구성되어 있어야 합니다.");
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // printAllLottoNum() {
  //   MissionUtils.Console.print(this.#numbers, "??");
  // }
}

export default Lotto;
