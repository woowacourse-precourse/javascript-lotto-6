export default class MyLotto {
  #lottoCount;

  setlottoCount(input) {
    this.#lottoCount = Number(input.slice(0, -3));
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}
