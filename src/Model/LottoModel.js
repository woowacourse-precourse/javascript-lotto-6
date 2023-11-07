import Lotto from "../Lotto";
import WinningLotto from "../WinningLotto";
import { WINNING_RESULT_DEFAULT } from "../constants";

class LottoModel {
  #number_of_lotto; // 로또의 갯수
  #lottos; // 구입한 로또 배열
  #winning_lotto; // 당첨 로또
  #winning_result; // 등수별 당첨 횟수
  #rate; // 수익률

  constructor() {
    this.#winning_result = new Object(WINNING_RESULT_DEFAULT);
  }

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

  /**
   * 당첨 로또를 리턴하는 메소드
   * @returns {WinningLotto}
   */
  get_winning_lotto() {
    return this.#winning_lotto;
  }

  /**
   * 당첨 로또를 설정하는 메소드
   * @param {WinningLotto}
   */
  set_winning_lotto(lotto) {
    this.#winning_lotto = lotto;
  }

  /**
   * 당첨 로또 객체에 보너스 번호를 설정하는 메소드
   * @param {int} number
   */
  set_bonus(number) {
    this.#winning_lotto.set_bonus(number);
  }

  set_winning_result(winning_result) {
    this.#winning_result = { ...winning_result };
  }

  /**
   * 당첨 내역을 리턴하는 메소드
   */
  get_winning_result() {
    return this.#winning_result;
  }

  /**
   * 수익률을 반환하는 메서드
   */
  get_rate() {
    return this.#rate;
  }

  /**
   * 수익률을 갱신하는 메서드
   */
  set_rate(rate) {
    this.#rate = rate;
  }
}

export default LottoModel;
