const LottoIntergrator = class {
  #allLottos = [];

  pushLotto(lotto) {
    this.#allLottos.push(lotto);
  }

  allLottoInfo() {
    return this.#allLottos;
  }
};

export default LottoIntergrator;
