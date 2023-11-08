export default class Prizes {
  #prizes;

  constructor() {
    this.#prizes = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
    }
  }

  addPrize(rank) {
    if (rank !== undefined) {
      this.#prizes[rank] += 1;
    }
  }

  get() {
    return this.#prizes;
  }
}