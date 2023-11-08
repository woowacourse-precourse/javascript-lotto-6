import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, WIN_MESSAGE } from '../modules/constant';

class View {
  #purchaseMoney;
  #winNumber;
  #bonusNumber;

  async inputPurchaseMoney() {
    this.#purchaseMoney = await Console.readLineAsync(MESSAGE.moneyInput);
    return this.#purchaseMoney;
  }

  async inputLottoNumber() {
    this.#winNumber = await Console.readLineAsync(MESSAGE.lottoNumberInput);
    return this.#winNumber.split(',').map((number) => Number(number));
  }

  async inputBonusNumber() {
    this.#bonusNumber = await Console.readLineAsync(MESSAGE.bonusNumberInput);
    return this.#bonusNumber;
  }

  printAmount(amount) {
    Console.print(`${amount}${MESSAGE.amount}`);
  }

  printPurchasedNumbers(numbers) {
    numbers.forEach((number) => Console.print(`[${number.join(', ')}]`));
  }

  printWinResult(profit, resultBoard) {
    Console.print(MESSAGE.winResult);
    Console.print(MESSAGE.line);
    Console.print(`${WIN_MESSAGE.matchThree} - ${resultBoard.three}개
    ${WIN_MESSAGE.matchFour} - ${resultBoard.four}개
    ${WIN_MESSAGE.matchFive} - ${resultBoard.five}개
    ${WIN_MESSAGE.matchFiveWithBonus} - ${resultBoard.fiveBonus}개
    ${WIN_MESSAGE.matchSix} - ${resultBoard.six}개\n`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  printNewLine() {
    Console.print('');
  }
}

export default View;
