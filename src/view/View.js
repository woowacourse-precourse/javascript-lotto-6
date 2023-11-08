import { Console } from '@woowacourse/mission-utils';
import { lotto } from '../constants/constants';
import { inputMessage, winningMessage } from '../constants/messages';

import WinningLotto from '../domain/WinningLotto';
import Validation from '../validations/Validation';

class View {
  async getPurchase() {
    let cash;
    while (true) {
      const input = await Console.readLineAsync(inputMessage.PURCHASE_MESSAGE);
      cash = parseInt(input, 10);

      if (Validation.checkLottoPurchase(cash)) break;
    }
    return cash;
  }

  showLottoNumber(lottoArray) {
    Console.print(`\n${lottoArray.length}개를 구매했습니다.`);

    lottoArray.forEach(lotto => {
      lotto.printLottoNumbers();
    });
  }

  #createInputLotto(input) {
    const lottoInput = input.split(',').map(Number);
    return new WinningLotto(lottoInput);
  }

  async getWinningLotto() {
    Console.print(inputMessage.ENTER);
    let input = await Console.readLineAsync(inputMessage.LOTTO_MESSAGE);
    let winningLotto;
    while (true) {
      try {
        winningLotto = this.#createInputLotto(input);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await Console.readLineAsync(inputMessage.LOTTO_MESSAGE);
      }
    }
    return winningLotto;
  }

  async getBonusNumber(winningLotto) {
    Console.print(inputMessage.ENTER);
    let input = await Console.readLineAsync(inputMessage.BONUS_MESSAGE);
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = parseInt(input, 10);
        winningLotto.getBonus(bonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
        input = await Console.readLineAsync(inputMessage.BONUS_MESSAGE);
      }
    }
  }

  printRankResult(rank) {
    Console.print(inputMessage.LOTTO_STATISTIC);

    for (const key in rank) {
      Console.print(`${winningMessage[key]} ${rank[key]}개`);
    }
  }

  printEarningRate(prize, lottoArray) {
    const cash = lottoArray.length * lotto.PRICE;
    const rate = ((prize / cash) * 100).toFixed(1);

    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default View;
