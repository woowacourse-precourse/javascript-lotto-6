import { Console } from '@woowacourse/mission-utils';
import { Lotto, LottoResult, MakeLotto } from './Lotto.js';
import { INPUTS } from './ui/Input.js';
import CONSTANT from './constants/constant.js';
import VALIDATOR from './utils/Validator.js';

class App {
  async play() {
    let validAmount = false;
    let validWinningNumber = false;
    let validBonusNumer = false;
    let amount;
    let winningNumber;
    let myLottos;
    let bonusNumber;

    while (!validAmount) {
      try {
        amount = await INPUTS.getAmount(CONSTANT.inputs.amount);
        const makeLotto = new MakeLotto(CONSTANT.game.lottoNumbersTemp, amount);
        VALIDATOR.makeLottoValidators.validateAmountUnitForLoop(amount);
        VALIDATOR.makeLottoValidators.validateAmountTypeForLoop(amount);
        myLottos = await makeLotto.makeLottos();

        validAmount = true;
      } catch (e) {}
    }

    while (!validWinningNumber) {
      try {
        winningNumber = await INPUTS.getWinningNumber(
          CONSTANT.inputs.winningNumber
        );
        const lotto = new Lotto(winningNumber);
        validWinningNumber = true;
      } catch (e) {
        Console.print(e);
      }
    }

    while (!validBonusNumer) {
      try {
        bonusNumber = await INPUTS.getBonusNumber(CONSTANT.inputs.bonusNumber);
        const lottoResult = new LottoResult(
          winningNumber,
          bonusNumber,
          amount,
          myLottos
        );

        await lottoResult.printResult();
        validBonusNumer = true;
      } catch (e) {
        Console.print(e);
      }
    }
  }
}

export default App;
