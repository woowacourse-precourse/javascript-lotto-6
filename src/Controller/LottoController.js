import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";
import LottoModel from "../Model/LottoModel";
import LottoView from "../View/LottoView";
import {
  LOTTO_VALUE,
  MAX_NUMBER,
  MIN_NUMBER,
  NUM_OF_LOTTO,
  PRICES,
  WINNING_RANKS,
} from "../constants";
import WinningLotto from "../WinningLotto";
import LottoValidator from "./LottoValidator";

class LottoController {
  #view;
  #model;
  #validator;

  constructor() {
    this.#view = new LottoView();
    this.#model = new LottoModel();
    this.#validator = new LottoValidator();
  }

  async lotto() {
    await this.#set_amount_input();

    this.#set_lottos();
    this.#view.print_lottos(this.#model.get_lottos());

    await this.#set_winning_lotto_input();
    await this.#set_bonus_input();

    this.#set_winning_result();
    this.#view.print_winning_result(this.#model.get_winning_result());

    this.#set_rate();
    this.#view.print_rate(this.#model.get_rate());
  }

  /**
   * 로또 객체 하나를 생성하는 메소드
   * @returns {Lotto}
   */
  #generate_one_lotto() {
    const LOTTO_ARRAY = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUM_OF_LOTTO
    );

    return new Lotto(LOTTO_ARRAY);
  }

  /**
   * 구입한 로또 갯수만큼 로또 객체 배열을 생성하고 반환하는 메소드
   * @returns {Lotto[]}
   */
  #generate_lottos() {
    const LOTTOS = [];
    while (LOTTOS.length < this.#model.get_num_of_lotto()) {
      LOTTOS.push(this.#generate_one_lotto());
    }
    return LOTTOS;
  }

  /**
   * 로또 갯수를 사용자에게 받아오고 이를 모델에 저장하는 메소드
   */
  async #set_amount_input() {
    const AMOUNT_STRING = await this.#view.get_amount();
    const PURCHASE_AMOUNT = this.#validator.validate_amount(AMOUNT_STRING);
    this.#model.set_num_of_lotto(PURCHASE_AMOUNT / 1000);
  }

  /**
   * 사용자가 입력한 갯수만큼 로또를 생성하고 이를 모델에 저장하는 메소드
   */
  #set_lottos() {
    const LOTTOS = this.#generate_lottos();
    this.#model.set_lottos(LOTTOS);
  }

  /**
   * 사용자에게 당첨 로또 번호를 입력받고, 검증 과정을 거친 후 이를 모델에 저장하는 메소드
   */
  async #set_winning_lotto_input() {
    const WINNING_STRING = await this.#view.get_winning_numbers();
    const WINNING_NUMBERS = WINNING_STRING.split(/\s*,\s*/).map((value) =>
      this.#validator.validate_nan(value)
    );

    this.#model.set_winning_lotto(new WinningLotto(WINNING_NUMBERS));
  }

  /**
   * 사용자에게 당첨 로또 보너스 번호를 입력받고, 검증 과정을 거친 후 이를 모델에 저장하는 메소드
   */
  async #set_bonus_input() {
    const BONUS_INPUT = await this.#view.get_bonus();
    const BONUS = this.#validator.validate_nan(BONUS_INPUT);
    this.#model.set_bonus(BONUS);
  }

  /**
   * 당첨 통계를 갱신하여 이를 모델에 저장하는 메서드
   */
  #set_winning_result() {
    this.#model.get_lottos().forEach((lotto) => {
      const RANK = lotto.get_winning_rank(this.#model.get_winning_lotto());
      if (!RANK) return;

      const NEW_WINNING_LOTTO = {
        ...this.#model.get_winning_result(),
        [RANK]: this.#model.get_winning_result()[RANK] + 1,
      };

      this.#model.set_winning_result(NEW_WINNING_LOTTO);
    });
  }

  /**
   * 총 수익 금액을 계산하여 리턴하는 메서드
   * @returns {int} revenue
   */
  #get_revenue() {
    const RANKS = Object.values(WINNING_RANKS);
    const REVENUE = RANKS.reduce(
      (accum, current_rank) =>
        accum +
        this.#model.get_winning_result()[current_rank] * PRICES[current_rank],
      0
    );
    return REVENUE;
  }

  /**
   * 수익률(%)을 계산하여 이를 모델에 저장하는 메서드
   */
  #set_rate() {
    const REVENUE = this.#get_revenue();
    const INVEST = LOTTO_VALUE * this.#model.get_num_of_lotto();

    const RATE = ((REVENUE / INVEST) * 100).toFixed(1);
    this.#model.set_rate(RATE);
  }
}

export default LottoController;
