class Winning {
  #winning;
  #bonus;
  constructor(winning, bonus) {
    this.#winning = winning;
    this.#validateWinning(winning);
    this.#bonus = bonus;
  }

  setBonus(bonus) {
    this.#bonus = bonus;
  }

  #validateWinning(winning) {
    //예외처리
    //1. 당첨번호는 숫자여야 한다.
    if (winning.join("").match(/\D/g))
      throw new Error("[ERROR] 당첨번호는 숫자여야 합니다.");
    //2. 당첨번호는 6개여야 한다.
    if (winning.length !== 6)
      throw new Error("[ERROR] 당첨번호는 6개여야 합니다.");
    //3. 당첨번호는 중복되지 않아야 한다.
    if (new Set(winning).size !== winning.length)
      throw new Error("[ERROR] 당첨번호는 중복되지 않아야 합니다.");
    //4. 각 당첨번호는 1~45사이의 숫자여야 합니다.
    winning.map(Number).forEach((element) => {
      if (element < 1 || element > 45)
        throw new Error("[ERROR] 각 당첨번호는 1~45사이의 숫자여야 합니다.");
    });
  }
}

export default Winning;
