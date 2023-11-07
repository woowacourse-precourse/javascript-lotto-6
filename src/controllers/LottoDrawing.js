// [로또 발행]
export default class LottoDrawing {
  #line;

  constructor(line) {
    this.#line = line;
  }

  //  로또 구입 수량 체크
  checkCount() {
    return Number(this.#line) / 1000;
  }
}
