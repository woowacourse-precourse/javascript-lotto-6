import {LottosDto} from "./dto/LottosDto.js";

export class Lottos {
  /**
   * @type {Lotto[]}
   */
  #manyLottos;

  /**
   *
   * @param {Lotto[]} boughtLottos
   * @description - boughtLottos를 돌면서 Lotto로 보내 로또 한장을 생성해서 모두 가져옴
   */

  constructor(boughtLottos) {
    this.#manyLottos = boughtLottos;
  }

  /**
   *
   * @return {Lotto[]}
   */
  get lottos() {
    //밖에선 lottos. 어쩌구로 사용

    return this.#manyLottos;
  }

  /**
   *
   * @return {LottosDto}
   * @description [LottosDto를 만들어주는 함수]
   *
   * manyLotto는 [Lotto, Lotto, Lotto ...]의 형태이다
   * 그것을 [LottoDto, LottoDto, LottoDto ...]로 만들기! :manyLottoDto
   * Lotto에 돌려서 만든 manyLottosDto를 LottosDto로 보내준다
   */

  makeLottosDto() {
    const manyLottoDto = this.#manyLottos.map((lotto) => lotto.makeLottoDto());
    return new LottosDto(manyLottoDto);
  }
}
