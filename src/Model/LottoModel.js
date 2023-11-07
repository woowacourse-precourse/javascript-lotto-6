import Lotto from "../Lotto";
import WinningLotto from "../WinningLotto";

class LottoModel {
  #number_of_lotto; // 로또의 갯수
  #lottos; // 구입한 로또 배열

  /**
   * 현재 저장된 로또의 갯수를 리턴하는 메소드
   * @returns {int} number_of_lotto
   */
  get_num_of_lotto() {
    return this.#number_of_lotto;
  }

  /**
   * 로또의 갯수를 설정하는 메소드
   * @param {int} number
   */
  set_num_of_lotto(number) {
    this.#number_of_lotto = number;
  }

  /**
   * 구입한 로또 배열을 리턴하는 메소드
   * @returns {Lotto[]}
   */
  get_lottos() {
    return this.#lottos;
  }

  /**
   * 구입 로또 배열을 갱신하는 메소드
   * @param {Lotto[]} lottos
   */
  set_lottos(lottos) {
    this.#lottos = lottos;
  }
}

export default LottoModel;
