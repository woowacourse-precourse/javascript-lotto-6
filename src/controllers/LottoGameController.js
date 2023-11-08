import { LOTTO_SETTING, PRIZE_NAME, WINNING_CRETERIA } from '../constants/Setting.js';
import { Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import InputValidator from '../validators/InputValidator.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../Lotto.js';
import WinningNumber from '../models/WinningNumber.js';
import WinningResult from '../models/WinningResult.js';

class LottoGameController {
  async startLottoGame() {
    const lottoList = await this.#getLotto();
    OutputView.outputLottoPurchaseAmount(lottoList);

    const winningNumber = await this.#setWinningNumber();
    await this.#setBonusNumber(winningNumber);

    const lottoWinningResult = this.#createLotteryResult(lottoList, winningNumber);
    OutputView.outputLottoGameResult(lottoWinningResult.getResult());
  }

  async #getLotto() {
    const purchasePrice = await this.#getInputPrice();
    const purchaseAmount = parseInt(purchasePrice / LOTTO_SETTING.pricePerLotto);
    return this.#generateLotto(purchaseAmount);
  }

  async #getInputPrice() {
    while (true) {
      const price = await InputView.inputPrice();
      try {
        InputValidator.validateInputPrice(price);
        return price;
      } catch (error) {
        OutputView.outputMessage(error.message);
      }
    }
  }

  #generateLotto(amount) {
    const lottoList = [];
    for (let i = 0; i < amount; i += 1) {
      lottoList.push(
        new Lotto(
          Random.pickUniqueNumbersInRange(
            LOTTO_SETTING.minNumber,
            LOTTO_SETTING.maxNumber,
            LOTTO_SETTING.numbersLength,
          ),
        ),
      );
    }
    return lottoList;
  }

  async #setWinningNumber() {
    while (true) {
      const winningNumberList = await InputView.inputWinningNumber();
      try {
        InputValidator.validateInputWinningNumber(winningNumberList);
        const winningNumber = new WinningNumber(winningNumberList);
        return winningNumber;
      } catch (error) {
        OutputView.outputMessage(error.message);
      }
    }
  }

  async #setBonusNumber(winningNumber) {
    while (true) {
      const bonusNumber = await InputView.inputBonusNumber();
      try {
        InputValidator.validateInputBonusNumber(bonusNumber, winningNumber.getWinningNumber());
        winningNumber.setBonusNumber(parseInt(bonusNumber));
        return bonusNumber;
      } catch (error) {
        OutputView.outputMessage(error.message);
      }
    }
  }

  #createLotteryResult(lottoList, winningNumber) {
    const result = new WinningResult(lottoList.length);
    const winningNumbers = winningNumber.getWinningNumber();
    const bonusNumber = winningNumber.getBonusNumber();
    lottoList.forEach((lotto) => {
      const matchingNumbers = lotto.getNumbers().reduce((count, number) => {
        if (winningNumbers.includes(number)) count += 1;
        return count;
      }, 0);
      const isIncludingBonusNumber = lotto.getNumbers().includes(bonusNumber);
      this.#setLottoPrize(result, matchingNumbers, isIncludingBonusNumber);
    });
    return result;
  }

  #setLottoPrize(result, matchingNumbers, isIncludingBonusNumber) {
    if (matchingNumbers === WINNING_CRETERIA.firstPrize) result.addPrizeToResult(PRIZE_NAME.first);
    if (matchingNumbers === WINNING_CRETERIA.secondPrize && isIncludingBonusNumber)
      result.addPrizeToResult(PRIZE_NAME.second);
    if (matchingNumbers === WINNING_CRETERIA.thirdPrize && !isIncludingBonusNumber)
      result.addPrizeToResult(PRIZE_NAME.third);
    if (matchingNumbers === WINNING_CRETERIA.fourthPrize)
      result.addPrizeToResult(PRIZE_NAME.fourth);
    if (matchingNumbers === WINNING_CRETERIA.fifthPrize) result.addPrizeToResult(PRIZE_NAME.fifth);
  }
}

export default LottoGameController;
