import { Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';

export default class LottoMachine {
  #player;

  #LOTTO_RULES;

  #INPUT_UNIT;

  constructor() {
    this.#player = new LottoPlayer();
    this.#LOTTO_RULES = {
      minNumber: 1,
      maxNumber: 45,
      pickCount: 6,
    };
    this.#INPUT_UNIT = 1000;
  }

  async run() {
    await this.#makeLottos();
  }

  #makeOneLotto() {
    // 추후 리팩토링 시 분리 고려
    const pickRandomUniqueNumbers = Random.pickUniqueNumbersInRange(
      this.#LOTTO_RULES.minNumber,
      this.#LOTTO_RULES.maxNumber,
      this.#LOTTO_RULES.pickCount,
    );

    const sortNumbers = this.#sortLottoNumbers(pickRandomUniqueNumbers);

    return new Lotto(sortNumbers);
  }

  async #makeLottos() {
    const purchaseAmountInput = await InputView.readPurchaseAmount();
    const purchaseAmount = Number(purchaseAmountInput);
    const lottoTicketCount = purchaseAmount / this.#INPUT_UNIT;

    // 추후 예외 처리 분리 예정
    if (purchaseAmount % this.#INPUT_UNIT !== 0) {
      throw new Error('[ERROR] 1,000원 단위의 금액을 입력하세요.');
    }

    for (let i = 1; i <= lottoTicketCount; i += 1) {
      this.#player.setLottoTickets(this.#makeOneLotto());
    }
  }

  #sortLottoNumbers(lottoNumbers) {
    const sortLottoNumbers = lottoNumbers.sort((number1, number2) => number1 - number2);
    return sortLottoNumbers;
  }
}
