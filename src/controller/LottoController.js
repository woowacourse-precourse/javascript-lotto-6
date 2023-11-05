class LottoController {
  #money;
  #lottos;
  #statistics;

  constructor(money) {
    this.#money = money;
    this.#lottos = [];
    this.#statistics = this.initLottoStatistics();
  }

  initLottoStatistics() {
    return {
      match3: { count: 0, prize: 5000 },
      match4: { count: 0, prize: 50000 },
      match5: { count: 0, prize: 1500000 },
      match5Bonus: { count: 0, prize: 30000000 },
      match6: { count: 0, prize: 2000000000 },
    };
  }
}

export default LottoController;
