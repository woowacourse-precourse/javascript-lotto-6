import { Handle_Input } from '../view/InputUI';
import { Handle_Output } from '../view/OutputUI';
import { Lottos } from '../domain/Lottos';
import { RandomNumber } from '../domain/RandomNumber';
import { Validator } from '../utils/validator';
import { WinningNumber } from '../domain/WinningNumber';
import { Convert } from '../utils/calc';

export class GameManager {
  #money_amount;

  async startGame() {
    try {
      const PurchasedLotto = await this.#initQuantity_PickLotto();
      const WinningLotto = await this.#initWinnigLotto_plusBonus();
      const [PrizeResult, LottoResult] =
        PurchasedLotto.getRanking(WinningLotto);

      const converted_Result = Convert.Convert_ResultMessage(LottoResult);
      const convertedProfit = Convert.Convert_Profit(
        PrizeResult,
        this.#money_amount,
      );
      Handle_Output.Ending_Output(converted_Result);
      Handle_Output.Profit_OutPut(convertedProfit);
    } catch (error) {
      Handle_Output.Error_Output(error);
    }
  }

  /* 구입할 금액 입력 및 복권 추첨 */
  async #initQuantity_PickLotto() {
    const quantitiy = await this.#initMoney();
    const num_generator = new RandomNumber();
    const lotto_collection = [];

    for (let i = 0; i < quantitiy; i++) {
      lotto_collection.push(num_generator.generate());
    }

    const lottos = new Lottos(lotto_collection);

    Handle_Output.Quantitiy_Output(quantitiy);
    Handle_Output.Lotto_Output(lottos.join_ConvertedString());
    return lottos;
  }

  async #initMoney() {
    
    this.#money_amount = parseInt(await Handle_Input.moneyInput());

    return this.#money_amount / 1000;
  }

  /* 당첨 숫자 및 보너스 숫자 뽑기 */
  async #initWinnigLotto_plusBonus() {
    const Winning = await this.#initWinningLotto();
    const Bonus = await this.#initBonus();

    Validator.Is_Duplicate_Bonus(Winning, Bonus);

    return new WinningNumber(Winning, Bonus);
  }

  async #initWinningLotto() {
    const winning = await Handle_Input.winningInput();
    return winning;
  }

  async #initBonus() {
    const bonus = await Handle_Input.bonusInput();
    return bonus;
  }
}
