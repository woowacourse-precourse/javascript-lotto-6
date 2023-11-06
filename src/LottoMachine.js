import { Random } from '@woowacourse/mission-utils';
import { LottoMachineUI } from './LottoMachineUI.js';

class LottoMachine {
  constructor(numberOfLotto) {
    this.numberOfLotto = numberOfLotto;
    this.lottoList = Array.from({ length: this.numberOfLotto }, () =>
      Array.from({ length: 6 })
    );
    this.lottomachineUI = new LottoMachineUI();
  }

  createLottoNumber = () => {
    for (let i = 0; i < this.numberOfLotto; i++) {
      this.lottoList[i] = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
    }

    this.lottomachineUI.printLottoList(this.lottoList);
    return this.lottoList;
  };
}
export { LottoMachine };
