class LottoList {
  #myLottos = [];

  add(lotto) {
    return this.#myLottos.push(lotto);
  }

  getLottoCount() {
    return this.#myLottos.length;
  }
}

export default LottoList;
