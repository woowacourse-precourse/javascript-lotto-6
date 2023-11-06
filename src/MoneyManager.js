class MoneyManager {
  #first = 0;
  #bonus = 0;
  #second = 0;
  #third = 0;
  #fourth = 0;
  #fail = 0;

  addTicket(matchingNumbers, bonus) {
    if (matchingNumbers <= 2) this.#fail += 1;
    else if (matchingNumbers === 3) this.#fourth += 1;
    else if (matchingNumbers === 4) this.#third += 1;
    else if (matchingNumbers === 5 && bonus === false) this.#second += 1;
    else if (matchingNumbers === 5 && bonus === true) this.#bonus += 1;
    else if (matchingNumbers === 6) this.#first += 1;
  }
}

export default MoneyManager;